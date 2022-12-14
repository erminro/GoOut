﻿using AutoMapper;
using Azure.Core;
using GoOut.Core.DTO;
using GoOut.Core.Interfaces;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Core.Commands.Event
{
    public class CreateEventCommand
    {
        public class CreateProductCommand : IRequest
        {
            public NewEventDTO NewEventDto { get; set; }

        }
    }
}
