using System.Text;
using System.Security.Cryptography;
using System.Collections.Generic;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public static class Seed
    {

        public static async Task SeedProducts(DataContext context)
        {
            if (await context.Products.AnyAsync()) return;
            var productData = await System.IO.File.ReadAllTextAsync("../API/Data/ProductSeedData.json");
            var products = JsonSerializer.Deserialize<List<ProductEntity>>(productData);

            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            await context.SaveChangesAsync();

        }
        public static async Task SeedUsers(DataContext context)
        {

            if (await context.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("../API/Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<UserEntity>>(userData);

            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();
                if (user.UserName == "Admin")
                {
                    user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Admin123"));
                    user.PasswordSalt = hmac.Key;
                    context.Users.Add(user);
                } 
                if (user.UserName != "Admin")
                {
                    user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
                    user.PasswordSalt = hmac.Key;
                    context.Users.Add(user);
                }      
            }

            await context.SaveChangesAsync();
        }
    }
}