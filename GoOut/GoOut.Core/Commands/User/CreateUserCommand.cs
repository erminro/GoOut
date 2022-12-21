using GoOut.Core.DTO;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Core.Commands.User
{
    public class CreateUserCommand:IRequest
    {
        public NewUserDTO newUser { get; set; }
    }
}
