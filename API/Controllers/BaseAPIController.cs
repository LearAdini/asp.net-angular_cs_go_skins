using System.Web.Http.Cors;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [EnableCors(origins: "http://https://drop-shipping-client.herokuapp.com", headers: "*", methods: "*")]
    [ApiController]
    [Route("api/[controller]")]

    public class BaseApiController : ControllerBase
    {
    }
}