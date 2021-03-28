using core;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;

namespace infrastructure
{
    public class Inventory
    {
        static ArrayList list = new ArrayList();
        public void AddProduct(string title, string color, decimal price) {
            list.Add(new Product
            {
                Title = title,
                Color = color,
                Price = price
            });
        }
        static Inventory()
        {
            list.Add(new Product
            {
                Title = "Pen",
                Color = "Black",
                Price = 500
            });
            list.Add(new Product
            {
                Title = "Pencil",
                Color = "Black",
                Price = 50
            });
            list.Add(new Product
            {
                Title = "Bat",
                Color = "White",
                Price = 1500
            });
            list.Add(new Product
            {
                Title = "Ball",
                Color = "Red",
                Price = 5
            });
            list.Add(new Product
            {
                Title = "Hockey",
                Color = "Black",
                Price = 5000
            });
        }
        public override string ToString()
        {
            string s = "\nTitle\t\tColor\tPrice";
            foreach (Product l in list) {
                s += "\n" + l.Title + "\t\t" + l.Color + "\t" + l.Price; 
            }
            return s;
        }
    }
   
}
