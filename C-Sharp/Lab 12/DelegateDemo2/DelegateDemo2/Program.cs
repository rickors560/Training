using System;

namespace DelegateDemo2
{
    class Program
    {
        
        static void Main(string[] args)
        {
            Calculator newCal = new Calculator
            {
                Num1 = 100,
                Num2 = 50
            };
            Calculator.CalDelegate c =  newCal.add;
            newCal.printRes(c);

            c = newCal.sub;
            newCal.printRes(c);

            c = newCal.mul;
            newCal.printRes(c);

            c = newCal.div;
            newCal.printRes(c);
        }
    }
}
