using ClassLibrary1;
using System;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            var a1 = new BankAccount("A1", 20000);
            a1.MakeDeposit(500, DateTime.Now, "1st deposit");
            try
            {
                a1.WithDraw(50, DateTime.Now, "1st withdraw");
                Console.WriteLine(a1.GetAccount());
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }




            var a2 = new BankAccount("A2", 2000);
            a2.MakeDeposit(5000, DateTime.Now, "1st deposit");
            try
            {
                a2.WithDraw(100, DateTime.Now, "1st withdraw");
                Console.WriteLine(a2.GetAccount());
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

        }
    }
}
