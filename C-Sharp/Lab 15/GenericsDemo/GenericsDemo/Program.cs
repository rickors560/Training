using System;

namespace GenericsDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            TestClass<int> intObj = new TestClass<int>();
            intObj.Add(11);
            intObj.Add(12);
            intObj.Add(13);
            intObj.Add(14);
            intObj.Add(15);
            TestClass<Products> products = new TestClass<Products>();
            products.Add(
                new Products{
                    Id = 1,
                    Price = 100,
                    Title ="Pen"
                }
                );
            products.Add(
                new Products
                {
                    Id = 2,
                    Price = 200,
                    Title = "Pencil"
                }
                );
            products.Add(
                new Products
                {
                    Id = 3,
                    Price = 2100,
                    Title = "Bat"
                }
                );

            products.Add(
                new Products
                {
                    Id = 4,
                    Price = 100000,
                    Title = "Red"
                });
            products.Add(
                new Products
                {
                    Id = 5,
                    Price = 60000,
                    Title = "Marker"
                });
            Products p1 = new Products
            {
                Id = 1,
                Price = 100,
                Title = "Pen"
            };
            Products p2 = new Products
            {
                Id = 2,
                Price = 200,
                Title = "Pencil"
            };
            for (int i = 0; i < 5; i++) {
                Console.WriteLine(products[i].ToString());
                Console.WriteLine(intObj[i]);
            }
            Console.WriteLine("Before Swaping \n" + "P1" + p1.ToString() + "\nP2" + p2.ToString());
            Swap<Products>(ref p1, ref p2);
            Console.WriteLine("After Swaping \n" + "P1" + p1.ToString() + "\nP2" + p2.ToString());

        }
        static void Swap<T>(ref T a, ref T b) {
            T temp = a;
            a = b;
            b = temp;
        }
    }
}
