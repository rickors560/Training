using System;
using System.Collections.Generic;
using System.Text;

namespace GenericsDemo
{
     public class Products
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string Title { get; set; }
        public override string ToString()
        {
            return $"Id = {Id}, Title = {Title},  Price= {Price}";
        }
    }
}
