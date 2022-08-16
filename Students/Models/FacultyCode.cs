using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
namespace Students.Models
{
    public class FacultyCode
    {
        public string FacultyName { get; set; }
        public int Id { get; set; }

        public List<FacultyGroup> Groups { get; set; }
    }
}
