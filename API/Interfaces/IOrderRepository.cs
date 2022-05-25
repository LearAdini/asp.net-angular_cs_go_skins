using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;

namespace API.Interfaces
{
    public interface IOrderRepository
    {
        void AddOrder(OrderEntity order);
        void Update(OrderEntity order);
        void Delete(OrderEntity order);
        Task<bool> SaveAllAsync();
        Task<List<OrderEntity>> GetOrdersByUserIdAsync(int userId);
        Task<OrderEntity> GetOrderAsync(int orderId);
        Task<List<OrderEntity>> GetAllOrdersAsync();
    }
}
