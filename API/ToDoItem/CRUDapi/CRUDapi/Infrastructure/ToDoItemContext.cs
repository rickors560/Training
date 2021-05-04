using CRUDapi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDapi.Infrastructure
{
    public class ToDoItemContext : DbContext
    {
        public ToDoItemContext(DbContextOptions<ToDoItemContext> options): base(options)
        {

        }
        public DbSet<ToDoItem> ToDoItems { get; set; }
    }
}
