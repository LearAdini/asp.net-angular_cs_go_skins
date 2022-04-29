using System.Threading.Tasks;
using API.Entities;
using API.Interfaces;
using Microsoft.EntityFrameworkCore;

using AutoMapper;
using System.Collections.Generic;
using AutoMapper.QueryableExtensions;
using API.DTOs;
using System.Linq;

namespace API.Data
{
    public class CardRepository : ICardRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public CardRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }




        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }


        public void Update(CardEntity card)
        {
            _context.Entry<CardEntity>(card).State = EntityState.Modified;
        }

        public async Task<CardEntity> GetCardByFullNameAsync(string name)
        {
            return await _context.Cards.SingleOrDefaultAsync(x => x.FullName == name);
        }

        public void AddCard(CardEntity card)
        {
            _context.Cards.Add(card);
        }



        public async Task<CardDTO> GetCardByUserIdAsync(int userId)
        {
            return await _context.Cards
            .Where(x => x.UserId == userId)
            .ProjectTo<CardDTO>(_mapper.ConfigurationProvider)
            .SingleOrDefaultAsync();
        }
    }
}