﻿using GoOut.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Core.Interfaces.Repositories
{
    public interface IEventRepository
    {
        public void Add(Event eve);
        public void Delete(Event eve);
    }
}
