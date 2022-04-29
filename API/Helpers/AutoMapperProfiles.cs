using System.Linq;
using API.DTOs;
using API.Entities;
using API.Extensions;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {

            CreateMap<UserUpdateDTO, UserEntity>();
            CreateMap<UserEntity, UserDto>();

            CreateMap<CardEntity, CardDTO>().ForMember(
                dest => dest.UserId,
                opt => opt.MapFrom(src => src.UserId)
            );

            CreateMap<ProductEntity, ProductDto>().ForMember(
                dest => dest.OrderId,
                opt => opt.MapFrom(src => src.OrderId)
            );

            CreateMap<RegisterDto, UserEntity>()
             .ForMember(
                 dest => dest.UserName,
                 opt =>
                 {
                     opt.MapFrom(src => src.Username);
                 }
             );

        }
    }
}
