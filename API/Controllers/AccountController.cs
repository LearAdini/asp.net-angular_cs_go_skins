using System;
using System.Security.Cryptography;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class AccountController : BaseApiController
    {

        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public AccountController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }


        // [Authorize]      
        [HttpPost("register")] //api/account/register
        public async Task<ActionResult<UserDto>> Register(RegisterDto registerDto)
        {
            using var hmac = new HMACSHA512();

            if (await UserExists(registerDto.Username)) return BadRequest("Username already exists");

            var user = new UserEntity
            {
                UserName = registerDto.Username.ToLower(),
                PasswordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
                // FullName = registerDto.FullName,
                // DateOfBirth = registerDto.Age,
                // City = registerDto.City,
                // Country = registerDto.Country,
                // Address = registerDto.Address,
                // PhoneNumber = registerDto.PhoneNumber
            };

            _context.Users.Add(user);

            await _context.SaveChangesAsync();

            
            return new UserDto {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
                // FullName = user.FullName
                // Country = user.Country,
                // City = user.City
            };
        }

        // [Authorize]
        [HttpPost("login")] //api/account/login
        public async Task<ActionResult<UserDto>> Login(LoginDto loginDto)
        {
            var user = await this._context.Users.SingleOrDefaultAsync(x => x.UserName == loginDto.Username);
            if (user == null) return Unauthorized("invalid username");

            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("invalid password");
            }

            return new UserDto {
                Username = user.UserName,
                Token = _tokenService.CreateToken(user)
                // PhotoUrl = user.Photos?.FirstOrDefault(x=> x.IsMain)?.Url,
                // FullName = user.FullName
            };
        }


        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(x => x.UserName == username.ToLower());
        }

    }
}
