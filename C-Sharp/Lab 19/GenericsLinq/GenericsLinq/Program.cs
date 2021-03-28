using System;
using System.Collections.Generic;
using System.Linq;

namespace GenericsLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Generic<int>> intlist = new List<Generic<int>>();
            intlist.Add(new Generic<int> { member = 1 });
            intlist.Add(new Generic<int> { member = 12 });
            intlist.Add(new Generic<int> { member = 13 });
            intlist.Add(new Generic<int> { member = 14 });
            intlist.Add(new Generic<int> { member = 15 });

            var x = intlist.Where((g)=> g.member>12 ).Select((g)=> g);
            x.ToList().ForEach((i) => i.Print());
            Console.WriteLine("\n");
            var y = from g in intlist where g.member > 12 select g;
            y.ToList().ForEach((i) => i.Print());
            Console.WriteLine("\n");

            List<Generic<Product>> prolist = new List<Generic<Product>>();
            prolist.Add(new Generic<Product> { member = new Product { ID = 1, Title = "Pen", Price = 100 } });
            prolist.Add(new Generic<Product> { member = new Product { ID = 2, Title = "Pencil", Price = 10 } });
            prolist.Add(new Generic<Product> { member = new Product { ID = 3, Title = "Bat", Price = 1500 } });
            prolist.Add(new Generic<Product> { member = new Product { ID = 4, Title = "Ball", Price = 20 } });
            prolist.Add(new Generic<Product> { member = new Product { ID = 5, Title = "Marker", Price = 25 } });

            var p = prolist.Where((g) => g.member.Price < 500).Select((g) => g);
            p.ToList().ForEach((i) => i.Print());
            Console.WriteLine("\n");
            var q = from g in prolist where g.member.Price < 500 select g;
            q.ToList().ForEach((i) => i.Print());
            Console.WriteLine("\n");
        }
    }
}
