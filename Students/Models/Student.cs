using System.ComponentModel.DataAnnotations;

namespace Students.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string SecondName { get; set; }
        public string Name { get; set; }
        public string FatherName { get; set; }
        public string DateOfBirth { get; set; }
        public int GroupId { get; set; }
        public FacultyGroup Group { get; set; }
    }
}
