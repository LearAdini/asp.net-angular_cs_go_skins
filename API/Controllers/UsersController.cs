using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using API.Extensions;
using API.Data;
using System.Security.Cryptography;
using API.Entities;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        private readonly ICardRepository _cardRepository;
        private readonly DataContext _context;

        public UsersController(DataContext context, IUserRepository userRepository, ICardRepository cardRepository, IMapper mapper)
        {
            _mapper = mapper;
            _userRepository = userRepository;
            _cardRepository = cardRepository;
            _context = context;
        }

        [HttpPut]
        public async Task<ActionResult> UpdateUser(UserUpdateDTO userUpdateDTO)
        {
            var username = User.GetUsername();
            var user = await _userRepository.GetUserByUserNameAsync(username);

            using var hmac = new HMACSHA512();

            if (userUpdateDTO.Password != null)
            {
                user.PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(userUpdateDTO.Password));
                user.PasswordSalt = hmac.Key;
            }

            _mapper.Map(userUpdateDTO, user);

            _userRepository.Update(user);

            if (await _userRepository.SaveAllAsync())
            {
                return NoContent();
            }

            return BadRequest("Failed to update user");
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDto>>> GetUsers()
        {
            var usersToREturn = await _userRepository.GetMembersAsync();
            return Ok(usersToREturn);
        }


        [HttpGet("{username}", Name = "GetUser")]
        public async Task<ActionResult<UserDto>> GetUser(string username)
        {
            var userToReturn = await _userRepository.GetMemberAsync(username);
            return userToReturn;
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var userToDelete = await _userRepository.GetUserByIdAsync(id);

            if (userToDelete == null)
            {
                return NotFound();
            }

            _userRepository.DeleteUser(userToDelete);

            if (await _userRepository.SaveAllAsync())
            {
                return Ok();
            }

            return BadRequest("Failed to delete user");
        }

    }
}


