using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public OrderRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
        public void AddOrder(ProductEntity order)
        {
            _context.Orders.Add(order);
        }

        public async Task<ProductDto> GetOrderAsync(int orderId)
        {
            return await _context.Orders
                .Where(x => x.OrderId == orderId)
                .ProjectTo<ProductDto>(_mapper.ConfigurationProvider)
                .SingleOrDefaultAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(ProductEntity order)
        {
            _context.Entry<ProductEntity>(order).State = EntityState.Modified;
        }
    }
}