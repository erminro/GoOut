﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Domain.DTO
{
    public class NewEventDTO
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public DateTime Date_Time { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string EntryFee { get; set; }
    }
}
