using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactWebApp.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactWebApp.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItemsListAsync()
        {
            return new List<Item>() { new Item() { ID = 1, Data1 = "data 1-1", Data2 = "data 1-2" }, new Item() { ID = 2, Data1 = "data 2-1", Data2 = "data 2-2" } };
        }
    }
}
