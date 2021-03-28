using System;
using System.Collections.Generic;
using System.Text;

namespace GenericsLinq
{
    public class Generic<T>
    {
        public T member;
        public void Print()
        {
            Console.WriteLine(member);
        }
    }
}
