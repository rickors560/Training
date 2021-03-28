using System;
using System.Collections.Generic;
using System.Text;

namespace LinqZip
{
    public class Distributer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Distributer(int dId, string n)
        {
            Id = dId;
            Name = n;
        }
    }
}
