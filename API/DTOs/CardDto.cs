using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class CardDTO
    {
        // [Required]
        public int UserId { get; set; }

        // [Required]
        public string FullName { get; set; }

        // [Required]
        public long CardNumber { get; set; }


        // [Required]
        public string CardDate { get; set; }
        // [Required]
        public int CardCVV { get; set; }
        // [Required]
        public int IdNumber { get; set; }


    }
}