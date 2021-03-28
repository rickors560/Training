using System;
using System.Collections.Generic;
using System.Linq;
namespace LinQDemo
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
            l.Add(new Products(9, 1900, "Title9","Owner9"));

            var a = l.Where((p) => p.Price > 300).Select((p)=> p.Owner) ; // lambda expression
            a.ToList().ForEach((i) => Console.WriteLine(i));
            
            Console.WriteLine("\n");
            var b = from p in l where p.Price > 300 select p.Owner;  // linq query which internally changes to linq query
            b.ToList().ForEach(i => Console.WriteLine(i));

            Console.WriteLine("\n");
            var c = l.Where((p) => p.Price > 300).Select((p) => (p.Id, p.Owner)); // or we can do new {New_Id = p.Id, New_Owner = p.Owner} with new object // lambda expression 
            c.ToList().ForEach((i) => Console.WriteLine($"ID = {i.Id}\t Owner = {i.Owner}"));

            Console.WriteLine("\n");
            var d = l.Where((p) => p.Price > 300 && p.Id == 6).Select((p) => (p.Id, p.Owner)); // lambda expression
            d.ToList().ForEach((i) => Console.WriteLine(i.Owner) );
            
        } 
    }
}
