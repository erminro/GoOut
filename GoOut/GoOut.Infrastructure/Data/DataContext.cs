using GoOut.Domain;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Infrastructure.Data
{
    public class DataContext:DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Event> Events { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server =.\\SQLEXPRESS; Database = GoOut; Trusted_Connection = True; ");
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
