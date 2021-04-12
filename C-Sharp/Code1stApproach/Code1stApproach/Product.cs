using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Code1stApproach
{
    public class Product
    {
        public string ProductID { get; set; }  //this is primary key
        [Required]
        public string Title { get; set; }
        public int Price { get; set; } 

        public ProductDetail ProductDetail { get; set; } // foreign key of Product detail
    }
}
