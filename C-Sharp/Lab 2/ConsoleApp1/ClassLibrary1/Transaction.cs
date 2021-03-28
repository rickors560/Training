using System;
using System.Collections.Generic;
using System.Text;

namespace ClassLibrary1
{
    class Transaction
    {
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public string Notes { get; set; }
         public Transaction(decimal amount, DateTime d, string n)
        {
            this.Amount = amount;
            this.Date = d;
            this.Notes = n;
        }
    }
}
