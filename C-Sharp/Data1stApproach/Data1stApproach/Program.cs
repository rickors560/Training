using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data1stApproach
{
    class Program
    {
        static void Main(string[] args)
        {
            var context = new DB1stApproachEntities();

            //var bat = new Product {
            //    Id = 3,
            //    Title = "Bat",
            //    Price = 1000
            //};
            //context.Products.Add(bat);

            //var findBat = context.Products.Find(3);  //cant remove a item directly we have to find it.
            //context.Products.Remove(findBat);

            //var findBat = context.Products.Find(3);
            //findBat.Price = 1500;

            //context.SaveChanges();
            var products = context.Products.Select((i)=> i);
            products.ToList().ForEach(
                (p) => {
                    Console.WriteLine(p.ToString()); 
                }
                );
        }
    }
}
