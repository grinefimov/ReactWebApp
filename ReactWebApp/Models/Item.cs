using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactWebApp.Models
{
    public class Item
    {
        public int ID { get; set; }
        [Required] public string Data1 { get; set; }
        [Required] public string Data2 { get; set; }
    }
}
