namespace API.Entities
{
    public class UserEntity
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string FullName { get; set; }

        // public string Gender { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public int PhoneNumber { get; set; }



        // public ICollection<Photo> Photos { get; set; }
        // public ICollection<UserLike> LikedByUsers { get; set; }
        // public ICollection<UserLike> LikedUsers { get; set; } = new List<UserLike>();
    }
}