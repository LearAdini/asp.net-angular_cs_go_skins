using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.DTOs;
using static API.DTOs.ProductDto;

namespace API.Entities
{
    public class ProductEntity
    {
        [Key]
        public int OrderId { get; set; }
        public int UserId { get; set; }
        // public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public string Description { get; set; }
        // public string ImageUrl { get; set; }
        // public int Sale { get; set; }

    }
}