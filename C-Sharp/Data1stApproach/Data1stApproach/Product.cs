//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Data1stApproach
{
    using System;
    using System.Collections.Generic;
    
    public partial class Product
    {
        public decimal Id { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
    
        public virtual Product Product1 { get; set; }
        public virtual Product Product2 { get; set; }
        public virtual ProductDetail ProductDetail { get; set; }
    }
}