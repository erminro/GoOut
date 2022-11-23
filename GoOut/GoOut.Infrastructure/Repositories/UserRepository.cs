using GoOut.Core.Interfaces.Repositories;
using GoOut.Domain;
using GoOut.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Infrastructure.Repositories
{
    public class UserRepository:IUserRepository
    {
        private readonly DataContext _dataContext;
        public UserRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public void Add(User user)
        {
            _dataContext.Users.Add(user);
        }
        public void Delete(User user)
        {
            _dataContext.Users.Remove(user);
        }

    }
}
