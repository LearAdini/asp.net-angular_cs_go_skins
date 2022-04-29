using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Migrations
{
    public partial class initMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.CreateTable(
            //     name: "Cards",
            //     columns: table => new
            //     {
            //         UserId = table.Column<int>(type: "INTEGER", nullable: false)
            //             .Annotation("Sqlite:Autoincrement", true),
            //         FullName = table.Column<string>(type: "TEXT", nullable: true),
            //         CardNumber = table.Column<long>(type: "INTEGER", nullable: false),
            //         CardDate = table.Column<string>(type: "TEXT", nullable: true),
            //         CardCVV = table.Column<int>(type: "INTEGER", nullable: false),
            //         IdNumber = table.Column<int>(type: "INTEGER", nullable: false)
            //     },
            //     constraints: table =>
            //     {
            //         table.PrimaryKey("PK_Cards", x => x.UserId);
            //     });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    Price = table.Column<int>(type: "INTEGER", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                });

            // migrationBuilder.CreateTable(
            //     name: "Users",
            //     columns: table => new
            //     {
            //         Id = table.Column<int>(type: "INTEGER", nullable: false)
            //             .Annotation("Sqlite:Autoincrement", true),
            //         UserName = table.Column<string>(type: "TEXT", nullable: true),
            //         PasswordHash = table.Column<byte[]>(type: "BLOB", nullable: true),
            //         PasswordSalt = table.Column<byte[]>(type: "BLOB", nullable: true),
            //         FirstName = table.Column<string>(type: "TEXT", nullable: true),
            //         LastName = table.Column<string>(type: "TEXT", nullable: true),
            //         Email = table.Column<string>(type: "TEXT", nullable: true),
            //         DateOfBirth = table.Column<DateTime>(type: "TEXT", nullable: false),
            //         Created = table.Column<DateTime>(type: "TEXT", nullable: false),
            //         LastActive = table.Column<DateTime>(type: "TEXT", nullable: false),
            //         Country = table.Column<string>(type: "TEXT", nullable: true),
            //         City = table.Column<string>(type: "TEXT", nullable: true),
            //         Address = table.Column<string>(type: "TEXT", nullable: true),
            //         PhoneNumber = table.Column<int>(type: "INTEGER", nullable: false)
            //     },
            //     constraints: table =>
            //     {
            //         table.PrimaryKey("PK_Users", x => x.Id);
            //     });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // migrationBuilder.DropTable(
            //     name: "Cards");

            migrationBuilder.DropTable(
                name: "Orders");

            // migrationBuilder.DropTable(
            //     name: "Users");
        }
    }
}
