// using System.Collections.Generic;
// using System.Linq;
// using System.Security.Cryptography;
// using System.Threading.Tasks;
// using API.Data;
// using API.DTOs;
// using API.Entities;
// using API.Interfaces;
// using Microsoft.AspNetCore.Authorization;
// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;

// namespace API.Controllers
// {
//     [Authorize]

//     public class ProductController : BaseApiController
//     {

//         private readonly DataContext _context;
//         private readonly ITokenService _tokenService;
//         public ProductController(DataContext context, ITokenService tokenService)
//         {
//             _tokenService = tokenService;
//             _context = context;
//         }

//         [HttpPost("add/{id}")]
//         public async Task<ActionResult<ProductDto>> AddToCart(int id)
//         {
//             var item = await this._context.Orders.SingleOrDefaultAsync(x => x.ProductId == id);
//             if (item == null) return Unauthorized("Invalid product");

//              _context.Orders.Add(item);

//              await _context.SaveChangesAsync();

//             return new ProductDto
//             {
//                 ProductName = item.ProductName,
//                 ProductPrice = item.ProductPrice,
//                 ProductDescription = item.ProductDescription,
//                 ProductSale = item.ProductSale
//             };
//             // return products;
//         }


//         [HttpGet("get")]
//        public async Task<ActionResult<IEnumerable<ProductEntity>>> CheckCart()
//         {
//             // var item = await this._context.Products.SingleOrDefaultAsync(x=> x.Id == productDto.ProductId);
//             //     if (item == null) return Unauthorized("Invalid product");
//             //   return item;  

//             var products = await _context.Orders.ToListAsync();
//             return products;
//         }

//     }
// }
