using System;
using System.Collections.Generic;
using System.Text;

namespace GenericsLinq
{
    public class Product
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
        public override string ToString()
        {
            return $"ID = {ID}\t Title = {Title}\t Price = {Price}";
        }
    }
}
