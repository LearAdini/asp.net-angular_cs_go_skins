using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(UserEntity user);

        Task<bool> SaveAllAsync();


        Task<IEnumerable<UserEntity>> GetUsersAsync();
        Task<UserEntity> GetUserByIdAsync(int id);
        Task<UserEntity> GetUserByUserNameAsync(string username);
         Task<UserDto> GetMemberAsync(string username);

     
    }
}
