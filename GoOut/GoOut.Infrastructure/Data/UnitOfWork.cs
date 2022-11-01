using GoOut.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Infrastructure.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private DataContext _appDbContext;

        public async Task<int> SaveChangesAsync()
        {

            return await _appDbContext.SaveChangesAsync();
        }
    }
}