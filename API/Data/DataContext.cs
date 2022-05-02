
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    { 
        public DataContext(DbContextOptions options) : base(options) {}
        public DbSet<UserEntity> Users { get; set; }
        public DbSet<ProductEntity> Orders { get; set; }
        public DbSet<CardEntity> Cards { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}