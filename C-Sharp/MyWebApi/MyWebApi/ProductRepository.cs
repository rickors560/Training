using MyWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApi
{
    public class ProductRepository
    {
        static private List<Product> products = new List<Product> { 
            new Product{ 
                ID = 1,
                Title = "Pen",
                Price = 100
            },
            new Product{
                ID = 2,
                Title = "Pencil",
                Price = 20
            },
            new Product{
                ID = 3,
                Title = "Bat",
                Price = 5000
            }
        };
        public List<Product> getProducts() {
            return products;
        }
        public void addProduct(Product p) {
            products.Add(p);
        }
        public Product find(int i) {
            var res = new Product();
            products.ForEach(
                (x) =>
                {
                    if (x.ID == i)
                    {
                        res = x;
                    }
                }
            );
            return res;
        }
    }
}
