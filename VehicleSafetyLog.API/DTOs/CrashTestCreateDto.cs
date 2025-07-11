using System.ComponentModel.DataAnnotations;
using VehicleSafetyLog.API.Models; // For the enums

namespace VehicleSafetyLog.API.DTOs
{
    public class CrashTestCreateDto
    {
        [Required]
        public int? VehicleId { get; set; }

        public TestType TestType { get; set; }
        public int HeadInjuryCriterion { get; set; }
        public int PeakDecelerationG { get; set; }
        public string? Notes { get; set; }
    }
}