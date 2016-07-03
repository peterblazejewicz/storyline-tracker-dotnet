using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StorylineTracker.Service.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StorylineTracker.Service.Controllers
{
    [Route("api/[controller]")]
    public class CharactersController : Controller
    {
        public IHostingEnvironment HostingEnvironment { get; set; }
        public CharactersController(IHostingEnvironment env)
        {
            HostingEnvironment = env;
        }

        // GET api/characters
        [HttpGet]
        public IActionResult Get()
        {
            if(this.Characters != null) {
                return Ok(this.Characters);
            }
            return NotFound();
        }

        // GET api/characters/5
        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            if(this.Characters != null) 
            {
                Character character = this.Characters
                    .Where(ch => ch.Id == id).FirstOrDefault();
                if(character != null) return Ok(character);
            }
            return NotFound();
        }

        public IEnumerable<Character> Characters
        {
            get
            {
                if (_characters != null) return _characters;
                var path = Path.Combine(HostingEnvironment.WebRootPath, "data", "characters.json");
                using (StreamReader file = System.IO.File.OpenText(path))
                {
                    JsonSerializer serializer = new JsonSerializer();
                    CharactersData d = (CharactersData)serializer.Deserialize(file, typeof(CharactersData));
                    _characters = (d != null) ? d.Data : null;
                }
                return _characters;
            }
        }
        private IEnumerable<Character> _characters;

    }
}
