using CalApi.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalController : ControllerBase
    {
        [HttpGet]
        public string greet()
        {
            return "Hello World!";
        }
        [HttpGet("products")]
        public List<Product> GetProducts()
        {
            List<Product> products = new List<Product>() {
                new Product{ Name = "Pen", Price = 50 },
                new Product{ Name = "Pencil", Price = 10}
            };
            return products;
        }
        [HttpPost("calculate")]
        public int Calculate(CalculateOperands op)
        {
            int res = 0;
            switch (op.Operation) {
                case "+": res = op.Num1 + op.Num2; break;
                case "-": res = op.Num1 - op.Num2; break;
                case "*": res = op.Num1 * op.Num2; break;
                case "/": res = op.Num1 / op.Num2; break;
                default: res = -1; break;
            }
            return res;
        }
    }
}