using Microsoft.EntityFrameworkCore;
using VehicleSafetyLog.API.Models;

namespace VehicleSafetyLog.API.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<CrashTest> CrashTests { get; set; }
    }
}
