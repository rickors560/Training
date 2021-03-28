using core;
using infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp
{
    static class MyExtensions
    {
        public static void displayProduct(this Inventory i, Product p) {
            i.AddProduct(p.Title, p.Color, p.Price);
            Console.WriteLine(i.ToString());
        }
    }
}
