using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Students.Models;
using Students.Utilities;
using Newtonsoft.Json;
using System.Text.Json;
namespace Students.BackendControllers
{
    [ApiController]
    public class GroupFacultyController : Controller
    {
        [HttpGet]
        [Route("/api/groups")]
        public FacultyGroup[] Get()
        {
            var debug = DatabaseWorker.GetFacultyGroups().ToArray();
            return debug;
        }
        [HttpPost]
        [Route("/api/groups/add")]
        public IActionResult AddGroup(FacultyGroup group)
        {
            DatabaseWorker
                .AddFacultyGroup(group);
            return Ok();
        }
        [HttpPost]
        [Route("/api/groups/remove")]
        public IActionResult RemoveGroup(FacultyGroup group)
        {
            DatabaseWorker.RemoveFacultyGroup(group);
            return Ok();
        }
        [HttpPost]
        [Route("/api/groups/modify")]
        public IActionResult ModifyGroup(FacultyGroup[] groupVariants)
        {
            DatabaseWorker.ModifyGroup(groupVariants[1], groupVariants[0]);
            return Ok();
        }
        private class FacultyJson
        {
            [JsonProperty]
            public string facultyName { get; set; }
            [JsonProperty]
            public int facultyCode { get; set; }
        }
        [HttpPost]
        [Route("/api/faculties/add")]
        public IActionResult AddFaculty(JsonElement body)
        {
            var debug = body.ToString();
            var faculty = JsonConvert.DeserializeObject<FacultyJson>(body.ToString());
            DatabaseWorker.AddFaculty(faculty.facultyName, faculty.facultyCode);
            return Ok();
        }
        [HttpGet]
        [Route("/api/faculties")]
        public dynamic[] GetFaculties()
        {
            return DatabaseWorker
                .GetFacultyCodes()
                .Select(a => new { facultyName = a.name, facultyCode = a.code }).ToArray();
        }
        [HttpGet]
        [Route("/api/groups/ids")]
        public int[] GetGroupIds()
        {
            return DatabaseWorker.GetFacultyGroups().Select(a => a.Id).ToArray();
        }

    }
}
