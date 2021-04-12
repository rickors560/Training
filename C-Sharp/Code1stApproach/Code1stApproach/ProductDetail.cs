using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Code1stApproach
{
    public class ProductDetail
    {
        public string ProductDetailID { get; set; } //this is primary key

        public string ProductID { get; set; } //must be same for relationship
        [Required]
        public Product Product { get; set; } // this is foreign key

        public string Title { get; set; }
        public string ExpiryDate { get; set; }
        public string IsInStock { get; set; }
    }
}
