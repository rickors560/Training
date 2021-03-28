using System;

namespace Polymorphism_demo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Person obj = new Person("foo", 9);
            obj.ToString();

            Console.WriteLine("\n");

            A obj1 = new A();
            obj1.display();

            B obj2 = new B();
            obj2.display();

            A obj3 = new B();
            obj3.display();
        }
    }
}
