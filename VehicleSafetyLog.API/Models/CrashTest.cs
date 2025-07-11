using System.ComponentModel.DataAnnotations;

namespace VehicleSafetyLog.API.Models
{
    public enum TestType { Frontal, Side, Rollover, Rear }
    public enum ResultStatus { Pending, Pass, Fail }
    public class CrashTest
    {
        public int Id { get; set; }
        public DateTime TestDate { get; set; }
        public TestType TestType { get; set; }

        // Result fields - these would be populated after the test
        public int HeadInjuryCriterion { get; set; } 
        public int PeakDecelerationG { get; set; } 
        public string? Notes { get; set; }
        public ResultStatus OverallResult { get; set; } = ResultStatus.Pending;

        // Foreign Key to Vehicle
        [Required]
        public int VehicleId { get; set; }
        public Vehicle Vehicle { get; set; }
    }
}
