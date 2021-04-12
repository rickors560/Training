using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace Code1stApproach
{
    class Program
    {
        static void Main(string[] args)
        {
            using (Code1stApproachContext context = new Code1stApproachContext()) {
                //Product p = new Product
                //{
                //    ProductID = "p1",
                //    Title = "pen",
                //    Price = 100
                //};
                //context.Products.Add(p);

                //Employee e = new Employee
                //{
                //    EmployeeID = "e1",
                //    Name = "John",
                //    Country = "INDIA"
                //};
                //context.Employees.Add(e);

                //Product p2 = new Product
                //{
                //    ProductID = "p2",
                //    Title = "pencil",
                //    Price = 5
                //};
                //context.Products.Add(p2);
                //ProductDetail detail = new ProductDetail
                //{   
                //    ProductDetailID = "pd1",
                //    Title = "pencil details",
                //    Product = p2,
                //    ExpiryDate = "12-09-2021",
                //    IsInStock = "true"
                //};
                //context.ProductDetails.Add(detail);

                //var getroductdetails = context.ProductDetails.Include("Product");
                //getroductdetails.ToList().ForEach(
                //    (i) => {
                //        Console.WriteLine($"{i.ProductDetailID}\t{i.Title}\t{i.ExpiryDate}\t{i.IsInStock}\t{i.ProductID}");
                //    }
                //);

                //Product p3 = new Product
                //{
                //    ProductID = "p3",
                //    Title = "bat",
                //    Price = 5000
                //};
                //context.Products.Add(p3);
                //ProductDetail detail1 = new ProductDetail
                //{
                //    ProductDetailID = "pd2",
                //    Title = "bat details",
                //    Product = p3,
                //    ExpiryDate = "25-12-2025",
                //    IsInStock = "true"
                //};
                //context.ProductDetails.Add(detail1);
                //Product findp3 = context.Products.Find("p3");
                //findp3.Price = 2500;
                //ProductDetail findbat = context.ProductDetails.Find("pd2");
                //findbat.IsInStock = "false";

                //ProductDetail findbat = context.ProductDetails.Find("pd2");
                //context.ProductDetails.Remove(findbat);

                try
                {
                    context.SaveChanges();
                    Console.WriteLine("\nData Saved\n");
                }
                catch (Exception ex) {
                    Console.WriteLine(ex);
                }
            }
        }
    }
}
