using System;
using System.Collections.Generic;
using System.Linq;

namespace LinqZip
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Products> l = new List<Products> {
                new Products(1, 100, "Title1", "Owner1"),
                new Products(2, 200, "Title2", "Owner2")
            };
            l.Add(new Products(3, 300, "Title3", "Owner3"));
            l.Add(new Products(4, 400, "Title4", "Owner4"));
            l.Add(new Products(5, 500, "Title5", "Owner5"));
            l.Add(new Products(6, 600, "Title6", "Owner6"));
            l.Add(new Products(7, 700, "Title7", "Owner7"));
            l.Add(new Products(8, 800, "Title8", "Owner8"));
            l.Add(new Products(9, 1900, "Title9", "Owner9"));

            List<Distributer> dist = new List<Distributer>();
            dist.Add(new Distributer(1, "Distributer1"));
            dist.Add(new Distributer(2, "Distributer2"));
            dist.Add(new Distributer(3, "Distributer3"));
            dist.Add(new Distributer(4, "Distributer4"));
            dist.Add(new Distributer(5, "Distributer5"));
            dist.Add(new Distributer(6, "Distributer6"));
            dist.Add(new Distributer(7, "Distributer7"));
            dist.Add(new Distributer(8, "Distributer8"));
            dist.Add(new Distributer(9, "Distributer9"));

            var x = dist.Zip(dist, (l, dist) => new { l.Id, dist.Name });
            x.ToList().ForEach(t => Console.WriteLine($"Product ID = {t.Id}\t Distributer Name = {t.Name}"));

        }
    }
}
