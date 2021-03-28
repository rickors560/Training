using System;
using System.Collections.Generic;
using System.Text;

namespace Polymorphism_demo
{
    public class Person
    {
        public String Name { get; set; }
        public int Age { get; set; }
        public Person(String n, int a)
        {
            this.Name = n;
            this.Age = a;
        }
        public override string ToString()
        {
            String s = this.Name + " is " + this.Age + " years old.";
            Console.WriteLine(s);
            return s;
        }
    }
}
