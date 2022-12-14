using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Domain.DTO.Profiles
{
     public class EventProfile:Profile
    {
        public EventProfile() {
            CreateMap<Event, NewEventDTO>();
            CreateMap<NewEventDTO, Event>();
        }
    }
}
