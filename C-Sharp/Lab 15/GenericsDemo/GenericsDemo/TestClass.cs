using System;
using System.Collections.Generic;
using System.Text;

namespace GenericsDemo
{
    public class TestClass<T>
    {
        T[] items = new T[5];
        int count = 0;
        public void Add(T item) {
            if (count < 5) {
                items[count] = item;
                count++;
            }
        }
        public T this[int index]
        {
            get { return items[index]; }
            set { items[index] = value; }
        }
    }
}
