using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Code1stApproach
{
    public class Code1stApproachContext : DbContext
    {
        public Code1stApproachContext() : base()
        {
            
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<ProductDetail> ProductDetails { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Data Source=DESKTOP-UE11QTV;Initial Catalog=Code1stApproachContext; User ID=sa; Password=root@560");
        }
    }
}
