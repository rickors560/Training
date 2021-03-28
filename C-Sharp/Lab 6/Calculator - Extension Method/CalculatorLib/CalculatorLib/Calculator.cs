using System;
using System.Collections.Generic;
using System.Text;

namespace CalculatorLib
{
    public class Calculator
    {
        int res;
        public int Num1 { get; set; }
        public int Num2 { get; set; }

        public int Add() {
            return (Num1 + Num2);
        }
        public int Sub() {
            return (Num1 - Num2);
        }
    }
}
