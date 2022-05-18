// using System.Security.Claims;

// namespace API.Extensions
// {
//     public static class ClaimsPrincipalExtensions
//     {
//         public static string GetUsername(this ClaimsPrincipal user){
//             return user.FindFirst(ClaimTypes.Name)?.Value;
//         }

//         public static int GetUserId(this ClaimsPrincipal user){
//             return int.Parse(user.FindFirst(ClaimTypes.NameIdentifier)?.Value);
//         }
//     }
// }
using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
            //1. update this to get the username from Name (representgin the UniqueName claim) and not NameIdentifier
            return user.FindFirst(ClaimTypes.Name)?.Value;
        }

        //2. add another extention method for the userId
        public static int GetUserId(this ClaimsPrincipal user)
        {
            
            return int.Parse(user.FindFirst(ClaimTypes.NameIdentifier)?.Value);
        }
        //3. go to LogUserActivity.cs 
    }
}