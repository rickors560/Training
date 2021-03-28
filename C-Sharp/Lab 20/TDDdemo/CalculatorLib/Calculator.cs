using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorLib
{
    public class Calculator : ICalculator
    {
        public int Add(int a, int b)
        {
            return a + b;
        }
        public int Sub(int a, int b)
        {
            return a - b;
        }
        public int Mul(int a, int b)
        {
            return a * b;
        }
        public int Div(int a, int b)
        {
            if (b == 0) {
                throw new ArgumentException("Can't divide by Zero");
            }
            return a / b;
        }
    }
}
