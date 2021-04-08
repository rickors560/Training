using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data1stApproach
{
    partial class Product
    {
        public override string ToString()
        {
            return $"{this.Id}\t{this.Title}\t{this.Price}";
        }
    }
}
