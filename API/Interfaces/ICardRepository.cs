using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface ICardRepository
    {
        void AddCard(CardEntity card);
        void Update(CardEntity user);

        Task<bool> SaveAllAsync();
       Task<CardDTO> GetCardByUserIdAsync(int userId);
        Task<CardEntity> GetCardByFullNameAsync(string name);
  

    }
}
