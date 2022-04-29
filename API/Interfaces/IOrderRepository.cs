using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IOrderRepository
    {
        void AddOrder(ProductEntity order);
        void Update(ProductEntity order);

        Task<bool> SaveAllAsync();
        Task<ProductDto> GetOrderAsync(int orderId);
    }
}
