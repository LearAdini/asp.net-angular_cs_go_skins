using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class ProductEntity
    {
        [Key]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public long ProductPrice { get; set; }
        public string ProductDescription { get; set; }
        public string ImageUrl { get; set; }
        public int ProductSale { get; set; }
    }
}