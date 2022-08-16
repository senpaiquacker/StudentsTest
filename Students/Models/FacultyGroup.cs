using System.Collections.Generic;
namespace Students.Models
{
    public class FacultyGroup
    {
        
        public int Id { get; set; }
        public int Group { get; set; }
        public int FacultyCodeId { get; set; }
        public string FacultyName { get => FacultyCode != default ? FacultyCode.FacultyName : ""; }
        public FacultyCode FacultyCode { get; set; }

        public List<Student> Students { get; set; }
    }
}
