using System;

namespace DelegateCalculator
{
    class Program
    {   
        public delegate void CalDelegate(int a,int b);
        static void Main(string[] args)
        {
            CalDelegate d = new CalDelegate(Add);
            d(10, 5);

            d = Sub;
            d(10, 5);
            
            d = Mul;
            d(10, 5);
            
            d = Div;
            d(10, 5);
        }
        static void Add(int a, int b) {
            Console.WriteLine($"{a} + {b} = {a+b}");
        }
        static void Sub(int a, int b)
        {
            Console.WriteLine($"{a} - {b} = {a - b}");
        }
        static void Mul(int a, int b)
        {
            Console.WriteLine($"{a} * {b} = {a * b}");
        }
        static void Div(int a, int b)
        {
            Console.WriteLine($"{a} / {b} = {a / b}");
        }
    }
}
