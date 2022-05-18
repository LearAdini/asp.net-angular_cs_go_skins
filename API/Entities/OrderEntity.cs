
using System.ComponentModel.DataAnnotations;



namespace API.Entities
{
    public class OrderEntity
    {
        [Key]
        public int OrderId { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public long Price { get; set; }
        public string Description { get; set; }
    }
}