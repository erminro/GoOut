using GoOut.Core.Interfaces.Repositories;
using GoOut.Infrastructure.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Infrastructure.Repositories
{
    public class EventRepository:IEventRepository
    {
        private readonly DataContext _dataContext;
        public EventRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

    }
}
