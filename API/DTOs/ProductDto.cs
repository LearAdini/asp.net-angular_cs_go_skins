using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs
{
    public class ProductDto
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