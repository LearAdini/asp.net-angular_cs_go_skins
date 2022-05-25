
using System.Threading.Tasks;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using API.Extensions;
using API.Entities;
using API.Data;
using System.Collections.Generic;
using Microsoft.AspNetCore.Authorization;

namespace API.Controllers
{
    [Authorize]
    public class OrderController : BaseApiController
    {

        private readonly IMapper _mapper;
        private readonly IOrderRepository _orderRepository;

        private readonly IUserRepository _userRepository;

        private readonly DataContext _context;

        public OrderController(DataContext context, IOrderRepository orderRepository, IMapper mapper, IUserRepository userRepository)
        {
            _mapper = mapper;
            _orderRepository = orderRepository;
            _context = context;
            _userRepository = userRepository;
        }


        [HttpPost("addorder")]
        public async Task<ActionResult<OrderEntity>> AddOrder(ProductEntity productEntity)
        {
            var user = User.GetUsername();
            var userId = _userRepository.GetUserByUserNameAsync(user).Result.Id;


            var order = new OrderEntity
            {
                UserId = userId,
                Name = productEntity.ProductName,
                Price = productEntity.ProductPrice,
                Description = productEntity.ProductDescription,
            };

            _context.Orders.Add(order);

            await _context.SaveChangesAsync();

            return Ok(order);
        }

        [HttpDelete("deleteorder/{id}")]
        public async Task<ActionResult<OrderEntity>> DeleteOrder(int id)
        {
            var order = await _orderRepository.GetOrderAsync(id);
            if (order == null)
            {
                return NotFound();
            }

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();

            return Ok(order);
        }

        [HttpGet("getorders")]
        public async Task<ActionResult<List<OrderEntity>>> GetOrders()
        {
            var user = User.GetUsername();
            var  userId = _userRepository.GetUserByUserNameAsync(user).Result.Id;

            var orders = await _orderRepository.GetOrdersByUserIdAsync(userId);

            return Ok(orders);
        }   

        [HttpGet("getallorders")]
        public async Task<ActionResult<List<OrderEntity>>> GetAllOrders()
        {
            var orders = await _orderRepository.GetAllOrdersAsync();

            return Ok(orders);
        }
    }
}