using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    // [EnableCors(origins: "https://drop-shipping-client.herokuapp.com", headers: "*", methods: "*")]
      [ServiceFilter(typeof(LogUserActivity))] 
    [ApiController]
    [Route("api/[controller]")]

    public class BaseApiController : ControllerBase
    {
    }
}