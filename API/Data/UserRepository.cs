using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;
using API.DTOs;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public UserRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<IEnumerable<UserDto>> GetMembersAsync()
        {
            return await _context.Users
            .ProjectTo<UserDto>(_mapper.ConfigurationProvider)
            .ToListAsync();
        }

        public async Task<UserDto> GetMemberAsync(string username)
        {
            return await _context.Users
            .Where(x => x.UserName == username)
            .ProjectTo<UserDto>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
        }

        public async Task<UserEntity> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<UserEntity> GetUserByUserNameAsync(string username)
        {
            return await _context.Users
            .SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<IEnumerable<UserEntity>> GetUsersAsync()
        {
            return await _context.Users
            .ToListAsync();
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(UserEntity user)
        {
            _context.Entry<UserEntity>(user).State = EntityState.Modified;
        }

        public void DeleteUser(UserEntity user)
        {
            _context.Users.Remove(user);
        }
    }
}