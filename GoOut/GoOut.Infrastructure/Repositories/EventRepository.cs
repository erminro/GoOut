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
    public class EventRepository:IEventRepository
    {
        private readonly DataContext _dataContext;
        public EventRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        public void Add(Event eve)
        {
            _dataContext.Events.Add(eve);
        }
        public void Delete(Event eve)
        {
            _dataContext.Events.Remove(eve);
        }
 
    }
}
