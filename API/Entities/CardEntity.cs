
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class CardEntity
    {
        [Key]
        public int UserId { get; set; }
        public string FullName { get; set; }

        public long CardNumber { get; set; }

        public string CardDate { get; set; }

        public int CardCVV { get; set; }

        public int IdNumber { get; set; }

    }
}