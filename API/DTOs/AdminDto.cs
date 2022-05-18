namespace API.DTOs
{
    public class AdminDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
        public string FirstName = "Admin";
        public string LastName = "Admin";

    }
}