using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using API.Entities;

namespace API.DTOs
{
    public class OrderDto
    {
        [Key]
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public long Price { get; set; }
        public string Description { get; set; }
    }
}