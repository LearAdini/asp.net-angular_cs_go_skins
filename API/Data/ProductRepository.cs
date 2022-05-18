using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class ProductRepository : IProductRepository
    {
        private readonly DataContext _context;
        public ProductRepository(DataContext context)
        {
            _context = context;
        }

        public void AddProduct(ProductEntity product)
        {
            _context.Products.Add(product);
        }

        public void Delete(ProductEntity product)
        {
            _context.Products.Remove(product);
        }

        public async Task<PagedList<ProductEntity>> GetAllProductsAsync()
        {
            var products =  _context.Products.AsQueryable();
            return  await PagedList<ProductEntity>.CreateAsync(products, 1, products.Count());
        }

        public Task<ProductEntity> GetProductByIdAsync(int id)
        {
            return _context.Products.FirstOrDefaultAsync(p => p.ProductId == id);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(ProductEntity product)
        {
            _context.Entry<ProductEntity>(product).State = EntityState.Modified;
        }
    }
}