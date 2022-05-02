
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using API.Extensions;
using API.Entities;
using API.Data;
using System.Text.Json;
using System.Collections.Generic;
using System.Linq;

namespace API.Controllers
{
    // [Authorize]
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
        public async Task<ActionResult<ProductEntity>> AddOrder(ProductDto productDTO)
        {
            var user = User.GetUsername();
            var userId = _userRepository.GetUserByUserNameAsync(user).Result.Id;


            var order = new ProductEntity
            {
                UserId = userId,
                Name = productDTO.Name,
                Price = productDTO.Price,
                Description = productDTO.Description,
            };

            _context.Orders.Add(order);

            await _context.SaveChangesAsync();

            return Ok(order);
        }

        [HttpGet("getorders")]
        public async Task<ActionResult<ProductEntity>> GetOrders()
        {
            var user = User.GetUserId();
            // var userId = _userRepository.GetUserByUserNameAsync(user).Result.Id;

            var orders = await _orderRepository.GetOrdersByUserIdAsync(user);

            // var order = new ProductEntity{ 
            //     UserId = userId,
            // };
            
            
            // var orders = await _orderRepository.GetOrdersByUserIdAsync(order.UserId);

            return Ok(orders);
        }
    }
}