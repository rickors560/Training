using CRUDapi.Infrastructure;
using CRUDapi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class mytask : ControllerBase
    {
        private readonly ToDoItemContext _context;
        public mytask(ToDoItemContext context)
        {
            _context = context;
        }
        [HttpGet("items")]
        public List<ToDoItem> getItems() {
            return _context.ToDoItems.ToList();
        }
        [HttpPost("items")]
        public ToDoItem postItem(ToDoItem item) {
            _context.ToDoItems.Add(item);
            _context.SaveChanges();
            return item;
        }
        [HttpPut("items/{id}")]
        public ToDoItem putItem(ToDoItem item)
        {
            _context.Entry(item).State = EntityState.Modified;
            _context.SaveChanges();
            return item;
        }
        [HttpDelete("items/{id}")]
        public ToDoItem deleteItem(long id)
        {
            var item = _context.ToDoItems.Find(id);
            _context.ToDoItems.Remove(item);
            _context.SaveChanges();
            return item;
        }
    }
}
