using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(35, MinimumLength = 6, ErrorMessage = "You must specify password of 6 characters minimum")]
        public string Password { get; set; }

        // [Required]
        public string FullName { get; set; }

        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public int PhoneNumber { get; set; }

    }
}