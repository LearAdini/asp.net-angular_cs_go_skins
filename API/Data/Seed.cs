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

        // public static async Task SeedProducts(DataContext context)
        // {
        //     if (await context.Orders.AnyAsync()) return;
        //     var productData = await System.IO.File.ReadAllTextAsync("../API/Data/ProductSeedData.json");
        //     var products = JsonSerializer.Deserialize<List<ProductEntity>>(productData);

        //       foreach (var product in products)
        //     {
        //         context.Orders.Add(product);
        //     }

        //     await context.SaveChangesAsync();

        // }
        public static async Task SeedUsers(DataContext context)
        {

            if (await context.Users.AnyAsync()) return;

            var userData = await System.IO.File.ReadAllTextAsync("../API/Data/UserSeedData.json");



            var users = JsonSerializer.Deserialize<List<UserEntity>>(userData);


            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
                user.PasswordSalt = hmac.Key;


                context.Users.Add(user);
            }

          
            await context.SaveChangesAsync();
        }
    }
}