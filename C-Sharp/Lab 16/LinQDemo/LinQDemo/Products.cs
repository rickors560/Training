using System;
using System.Collections.Generic;
using System.Text;

namespace LinQDemo
{
    public class Products
    {
        public int Id { get; set; }
        public int Price { get; set; }
        public string Title { get; set; }
        public string Owner { get; set; }
        public Products(int id, int p, string t, string o)
        {
            Id = id;
            Price = p;
            Title = t;
            Owner = o;
        }
        public override string ToString()
        {
            return $"ID = {Id} Price = {Price} Title = {Title} Owner = {Owner}"; 
        }
    }
}
