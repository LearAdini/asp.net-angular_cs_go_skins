using System.Threading.Tasks;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface IProductRepository
    {
        void AddProduct(ProductEntity product);
        void Update(ProductEntity product);
        void Delete(ProductEntity product);
        Task<bool> SaveAllAsync();
        Task<PagedList<ProductEntity>> GetAllProductsAsync();
        Task<ProductEntity> GetProductByIdAsync(int id);
    }
}