using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoOut.Domain
{
    public class Event
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Photo { get; set; }
        public DateTime Date { get; set; }
        public DateTime Time { get; set; }
        public string Description { get; set; }
        public string Location { get; set; }
        public string EntryFee { get; set; }
        public User LikedUserID { get; set; }
        public User CreatedUserID { get; set; }
    }
}
