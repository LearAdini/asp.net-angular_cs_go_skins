using System;
using System.Threading.Tasks;
using API.Extensions;
using API.Interfaces;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace API.Helpers
{
    public class LogUserActivity : IAsyncActionFilter
    {
        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {

            var resultContext = await next();

            if (!resultContext.HttpContext.User.Identity.IsAuthenticated) return;
            
            //1. ok so the reason we use GetUserByUserNameAsync is because this is the only data about the user we have in the token.
            //  so if I want to have the user id so I can use GetUserByIdAsync (which is more efficient), i need to add this data to the token.
            //  go to TokenService.cs
            //2. after the fix we can get the id insted of the username
            // var username = resultContext.HttpContext.User.GetUsername();
            var userId = resultContext.HttpContext.User.GetUserId();

            var repo = resultContext.HttpContext.RequestServices.GetService<IUserRepository>();
            //3. and use it
            // var user = await repo.GetUserByUserNameAsync(username);
            var user = await repo.GetUserByIdAsync(userId);
            user.LastActive = DateTime.Now;
            await repo.SaveAllAsync();

            //4. test in postman and browser:
            //  postman: section 13: 
            //  1. login, get the token and past it in jwt.io, we see the payload contains name and the id
            //  2. get request with 'Get Users No QS', see it's working fine 
            //  3. test updating the user in section 9, we get 204 and ,
            //  4. we can see the data been updated in section 12, we can also see the lastActive also updated to just now 

            // back to readme.md

        }
    }
}