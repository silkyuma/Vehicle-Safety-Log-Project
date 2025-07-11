using VehicleSafetyLog.API.Models;
using VehicleSafetyLog.API.Services;
using Xunit;

namespace VehicleSafetyLog.API.VehicleSafetyLog.Tests
{
    public class TestResultServiceTests
    {
        private readonly TestResultService _service;

        public TestResultServiceTests()
        {
            _service = new TestResultService();
        }

        [Fact]
        public void DetermineResult_WhenHicIsHigh_ReturnsFail()
        {
            // Arrange
            var testWithHighHic = new CrashTest { HeadInjuryCriterion = 1100 };

            // Act
            var result = _service.DetermineResult(testWithHighHic);

            // Assert
            Assert.Equal(ResultStatus.Fail, result);
        }

        [Fact]
        public void DetermineResult_WhenHicIsLow_ReturnsPass()
        {
            // Arrange
            var testWithLowHic = new CrashTest { HeadInjuryCriterion = 750 };

            // Act
            var result = _service.DetermineResult(testWithLowHic);

            // Assert
            Assert.Equal(ResultStatus.Pass, result);
        }
    }
}
