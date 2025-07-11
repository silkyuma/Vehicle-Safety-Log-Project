namespace VehicleSafetyLog.API.Models
{
    public class Vehicle
    {
        public int Id { get; set; }
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }

        // A vehicle can be in many crash tests
        public ICollection<CrashTest> CrashTests { get; set; } = new List<CrashTest>();
    }
}
