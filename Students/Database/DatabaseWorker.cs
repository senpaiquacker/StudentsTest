using System;
using System.Collections.Generic;
using System.Linq;
using Students.Database;
using Students.Models;
namespace Students.Utilities
{
    public class DatabaseWorker
    {
        public static IEnumerable<(int code, string name)> GetFacultyCodes()
        {
            using (var context = StudentContext.CreateContext())
            {
                return context
                    .Codes
                    .ToList()
                    .Select(a => (code: a.Id, name: a.FacultyName));
            }
        }
        public static void AddFaculty(string name, int code)
        {
            using(var context = StudentContext.CreateContext())
            {
                context.Codes.Add(new FacultyCode { FacultyName = name, Id = code });
                context.SaveChanges();
            }
        }
        public static IEnumerable<FacultyGroup> GetFacultyGroups()
        {
            using (var context = StudentContext.CreateContext())
            {
                return context
                    .Groups
                    .ToList();
            }
        }
        public static void AddFacultyGroup(FacultyGroup created)
        {
            using (var context = StudentContext.CreateContext())
            {
                context.Groups.Add(created);
                context.SaveChanges();
            }
        }

        public static void ModifyGroup(FacultyGroup oldVar, FacultyGroup newVar)
        {
            RemoveFacultyGroup(oldVar);
            AddFacultyGroup(newVar);
        }

        public static void RemoveFacultyGroup(FacultyGroup removed)
        {
            using (var context = StudentContext.CreateContext())
            {
                var rem = context
                    .Groups
                    .First(a => a.FacultyCodeId == removed.FacultyCodeId &&
                            a.Group == removed.Group);
                context.Groups.Remove(rem);
                context.SaveChanges();
            }
        }
        public static IEnumerable<Student> GetStudents()
        {
            using(var context = StudentContext.CreateContext())
            {
                return context.Students.ToList();
            }
        }
        public static void AddStudent(Student created)
        {
            using(var context = StudentContext.CreateContext())
            {
                context.Students.Add(created);
                context.SaveChanges();
            }
        }
        public static void RemoveStudent(Student removed)
        {
            using(var context = StudentContext.CreateContext())
            {
                var rem = context
                    .Students
                    .FirstOrDefault(a =>
                    a.SecondName == removed.SecondName &&
                    a.Name == removed.Name &&
                    a.FatherName == removed.FatherName &&
                    a.DateOfBirth == removed.DateOfBirth &&
                    a.Group == removed.Group);
                context.Students.Remove(rem);
                context.SaveChanges();  
            }
        }
    }
}
