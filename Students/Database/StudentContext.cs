using Npgsql.EntityFrameworkCore.PostgreSQL;
using Microsoft.EntityFrameworkCore;
using Students.Models;
namespace Students.Database
{
    public class StudentContext : DbContext
    {
        public DbSet<FacultyGroup> Groups { get; set; }
        public DbSet<Student> Students { get; set; }
        public DbSet<FacultyCode> Codes { get; set; }
        internal StudentContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<FacultyCode>().HasKey(t => t.Id);
            builder.Entity<FacultyCode>().HasAlternateKey(t => t.FacultyName);

            builder.Entity<FacultyGroup>().Property(t => t.Id).ValueGeneratedOnAdd();
            builder.Entity<FacultyGroup>().HasKey(t => t.Id);
            builder.Entity<FacultyGroup>().HasAlternateKey(t => new { t.FacultyCodeId, t.Group });
            builder.Entity<FacultyGroup>()
                .HasOne(t => t.FacultyCode)
                .WithMany(t => t.Groups)
                .HasForeignKey(p => p.FacultyCodeId);

            builder.Entity<Student>().HasKey(t => t.Id);
            builder.Entity<Student>().HasOne(t => t.Group).WithMany(t => t.Students).HasForeignKey(t => t.GroupId);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            builder.UseNpgsql("Host=localhost;Port=5432;Database=StudentsDatabase;Username=postgres;Password=ja2min31");
        }
        public static StudentContext CreateContext()
        {
            return new StudentContext();
        }
    }
}
