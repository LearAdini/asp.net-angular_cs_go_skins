using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ProductsController : BaseApiController
    {
        private readonly IProductRepository _productRepository;
        private readonly DataContext _context;
        private readonly IMapper _mapper;



        public ProductsController(DataContext context, IMapper mapper, IProductRepository productRepository)
        {
            _productRepository = productRepository;
            _context = context;
            _mapper = mapper;

        }

        [HttpGet]
        public async Task<ActionResult<List<ProductEntity>>> GetProducts()
        {
            var products = await _productRepository.GetAllProductsAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductEntity>> GetProduct(int id)
        {
            var product = await _productRepository.GetProductByIdAsync(id);
            return Ok(product);
        }

        [HttpPut]
        public async Task<ActionResult<ProductEntity>> UpdateProduct(ProductEntity productEntity)
        {
            var product = await _productRepository.GetProductByIdAsync(productEntity.ProductId);
            if (product == null)
            {
                return NotFound();
            }
            // product.ProductId = productEntity.ProductId;
            product.ProductName = productEntity.ProductName;
            product.ProductPrice = productEntity.ProductPrice;
            product.ProductSale = productEntity.ProductSale;
            product.ProductDescription = productEntity.ProductDescription;

            await _productRepository.SaveAllAsync();

            return NoContent();    
        }

        [HttpPost]
        public async Task<ActionResult<ProductEntity>> CreateProduct(ProductEntity productEntity)
        {
            var product = new ProductEntity
            {
                ProductName = productEntity.ProductName,
                ProductPrice = productEntity.ProductPrice,
                ProductSale = productEntity.ProductSale,
                ProductDescription = productEntity.ProductDescription,
                ImageUrl = productEntity.ImageUrl
            };

             _context.Products.Add(product);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.ProductId }, product);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ProductEntity>> DeleteProduct(int id)
        {
            var product = await _productRepository.GetProductByIdAsync(id);
            if (product == null)
            {
                return NotFound();
            }
            _productRepository.Delete(product);

              if (await _productRepository.SaveAllAsync())
            {
                return Ok();
            }
            return BadRequest("Failed to delete product");
        }
    }
}
