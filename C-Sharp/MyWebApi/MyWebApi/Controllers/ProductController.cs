using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet("get")]
        public List<Product> GetProducts() {
            ProductRepository myrepo = new ProductRepository();
            return myrepo.getProducts();
        }

        [HttpPost("add")]
        public List<Product> CreateProduct(Product p) {
            ProductRepository myrepo = new ProductRepository();
            myrepo.addProduct(p);
            return myrepo.getProducts();
        }

        [HttpGet("find")]
        public Product FindByID(int i) {
            ProductRepository myrepo = new ProductRepository();
            return myrepo.find(i);
        }
    }
}
