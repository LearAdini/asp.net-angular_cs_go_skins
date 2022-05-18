using System.Threading.Tasks;
using API.DTOs;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using API.Data;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Authorize]
    public class CardController : BaseApiController
    {
  
        private readonly IMapper _mapper;
        private readonly ICardRepository _cardRepository;

        private readonly DataContext _context;

        public CardController(DataContext context, ICardRepository cardRepository, IMapper mapper)
        {
            _mapper = mapper;

            _cardRepository = cardRepository;
            _context = context;
        }


        [HttpPost("addcard")]
        public async Task<ActionResult<CardDTO>> AddCard(CardEntity cardEntity)
        {
            if (await CardrExists(cardEntity.UserId))
            {
                return BadRequest("Already added card");

            }

            var card = new CardEntity
            {
                UserId = cardEntity.UserId,
                FullName = cardEntity.FullName,
                CardNumber = cardEntity.CardNumber,
                CardDate = cardEntity.CardDate,
                CardCVV = cardEntity.CardCVV,
                IdNumber = cardEntity.IdNumber,
            };

            _context.Cards.Add(card);

            await _cardRepository.SaveAllAsync();

            return new CardDTO
            {
                UserId = cardEntity.UserId,
                FullName = cardEntity.FullName,
                CardNumber = cardEntity.CardNumber,
                CardDate = cardEntity.CardDate,
                CardCVV = cardEntity.CardCVV,
                IdNumber = cardEntity.IdNumber,
            };
        }


        [HttpGet("getcard/{userId}")]
        public async Task<ActionResult<CardDTO>> GetCard(int userId)
        {
             var cardToReturn = await _cardRepository.GetCardByUserIdAsync(userId);
             return Ok(cardToReturn);
        }

        [HttpPut]
        public async Task<ActionResult> UpdateCard(CardEntity cardEntity)
        {
            
            var card = await _cardRepository.GetCardByFullNameAsync(cardEntity.FullName);

              
            _mapper.Map(cardEntity, card);

            _cardRepository.Update(card);

            if (await _cardRepository.SaveAllAsync())
            {
                return NoContent();
            }

            return BadRequest("Failed to update card");
        }


        private async Task<bool> CardrExists(int id)
        {
            return await _context.Cards.AnyAsync(x => x.UserId == id);
        }


    }
}