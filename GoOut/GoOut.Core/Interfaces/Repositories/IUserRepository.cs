using GoOut.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Core.Interfaces.Repositories
{
   public interface IUserRepository
    {
        public void Add(User user);
        public void Delete(User user);
    }
}
