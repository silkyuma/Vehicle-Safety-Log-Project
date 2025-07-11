using VehicleSafetyLog.API.Models;

namespace VehicleSafetyLog.API.Services
{
    public interface ITestResultService
    {
        ResultStatus DetermineResult(CrashTest test);
    }

    public class TestResultService : ITestResultService
    {
        // A simple business rule: if HIC is over 1000, it's a fail.
        private const int HicFailThreshold = 1000;

        public ResultStatus DetermineResult(CrashTest test)
        {
            if (test.HeadInjuryCriterion > HicFailThreshold)
            {
                return ResultStatus.Fail;
            }
            return ResultStatus.Pass;
        }
    }
}
