using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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
        [ForeignKey("LikedUserID")]
        [InverseProperty("LikedEvents")]
        public User LikedUser { get; set; }
        [ForeignKey("CreatedUserID")]
        [InverseProperty("CreatedEvents")]
        public User CreatedUser { get; set; }
    }
}
