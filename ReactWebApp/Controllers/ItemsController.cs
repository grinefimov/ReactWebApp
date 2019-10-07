using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ReactWebApp.Models;

namespace ReactWebApp.Controllers
{
    [Route("api/[controller]")]
    public class ItemsController : Controller
    {
        [HttpGet]
        public ActionResult<IEnumerable<Item>> GetItemsAsync()
        {
            var items = new List<Item>
            {
                new Item {ID = 1, Data1 = "data 1-1", Data2 = "data 1-2"},
                new Item {ID = 2, Data1 = "data 2-1", Data2 = "data 2-2"}
            };

            return items;
        }
    }
}