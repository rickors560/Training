using CalculatorLib;
using System;

namespace ExtensionMethodDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator c1 =new Calculator {
                Num1 = 10,
                Num2 = 5
            };
            Console.WriteLine(c1.Mul());
        }
    }
}
