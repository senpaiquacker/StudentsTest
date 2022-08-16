using Microsoft.AspNetCore.Mvc;
using Students.Models;
using Students.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Students.BackendControllers
{
    [ApiController]
    public class StudentController : Controller
    {
        [HttpGet]
        [Route("/api/students")]
        public Student[] Get()
        {
            return DatabaseWorker.GetStudents().ToArray();
        }
        [HttpPost]
        [Route("/api/students/add")]
        public IActionResult AddStudent(Student student)
        {
            var debug = student;
            return Ok();
        }
        [HttpPost]
        [Route("/api/students/modify")]
        public IActionResult ModifyStudent(Student[] variants)
        {
            return Ok();
        }
        [HttpPost]
        [Route("/api/students/remove")]
        public IActionResult RemoveStudent(Student student)
        {
            return Ok();
        }
    }
}
