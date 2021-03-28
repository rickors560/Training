using CalculatorLib;
using System;
using System.Collections.Generic;
using System.Text;

namespace ExtensionMethodDemo
{
    public static class MyExtensionMethods
    {
        public static int Mul(this Calculator c) { 
            return (c.Num1*c.Num2);
        }
    }
}
