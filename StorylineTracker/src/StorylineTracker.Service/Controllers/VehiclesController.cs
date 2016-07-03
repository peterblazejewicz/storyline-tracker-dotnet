using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StorylineTracker.Service.Models;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace StorylineTracker.Service.Controllers
{
    [Route("api/[controller]")]
    public class VehiclesController : Controller
    {

        public IHostingEnvironment HostingEnvironment { get; set; }
        public VehiclesController(IHostingEnvironment env)
        {
            HostingEnvironment = env;
        }

        // GET api/vehicles
        [HttpGet]
        public IActionResult Get()
        {
            if(this.Vehicles != null) {
                return Ok(this.Vehicles);
            }
            return NotFound();
        }

        // GET api/vehicles/5
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            if(this.Vehicles != null) 
            {
                Vehicle vehicle = this.Vehicles
                    .Where(v => v.Id == id).FirstOrDefault();
                if(vehicle != null) return Ok(vehicle);
            }
            return NotFound();
        }


        private IEnumerable<Vehicle> Vehicles 
        {
            get {
                if(_vehicles != null) return _vehicles;
                var path = Path.Combine(HostingEnvironment.WebRootPath, "data", "vehicles.json");
                using(StreamReader file = System.IO.File.OpenText(path))
                {
                    JsonSerializer serializer =  new JsonSerializer();
                    VehiclesData d = (VehiclesData)serializer.Deserialize(file, typeof(VehiclesData));
                    _vehicles = (d != null) ? d.Data : null;
                }
                return _vehicles;
            }
         }
        private IEnumerable<Vehicle> _vehicles = null;
    }
}
