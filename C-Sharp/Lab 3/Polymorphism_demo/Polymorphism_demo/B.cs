using System;
using System.Collections.Generic;
using System.Text;

namespace Polymorphism_demo
{
    public class B : A
    {
        public override void display()
        {
            Console.WriteLine("This is Child Class B");
        }
    }
}
