using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data1stApproach
{
    public partial class ProductDetail
    {
        public override string ToString()
        {
            return $"{this.Id}\t{this.Title}\t{this.ExpiryDate}\t{this.IsInStock}";
        }
    }
}
