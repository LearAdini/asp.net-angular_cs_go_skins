using System.Collections.Generic;
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

        public void AddOrder(OrderEntity order)
        {
            _context.Orders.Add(order);
        }

        public  Task<List<OrderEntity>> GetOrdersByUserIdAsync(int userId)
        {
             IQueryable<OrderEntity> query;
            query = from Subjects in _context.Orders.Where(v => v.UserId == userId) select Subjects;
            return  query.ToListAsync();
            // var query =  _context.Orders.AsQueryable();
            // var result =  query.Where(x => x.UserId == userId).ToList();
            // return  result;
                // return await _context.Orders.FirstOrDefaultAsync(p => p.UserId == userId);
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(OrderEntity order)
        {
            _context.Entry<OrderEntity>(order).State = EntityState.Modified;
        }
    }
}
