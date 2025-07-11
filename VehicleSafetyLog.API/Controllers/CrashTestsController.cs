using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VehicleSafetyLog.API.Data;
using VehicleSafetyLog.API.Models;
using VehicleSafetyLog.API.DTOs;

namespace VehicleSafetyLog.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrashTestsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public CrashTestsController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/crashtests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CrashTest>>> GetCrashTests()
        {
            // Include vehicle data with each test
            return await _context.CrashTests.Include(ct => ct.Vehicle).ToListAsync();
        }

        // GET: api/crashtests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CrashTest>> GetCrashTest(int id)
        {
            var crashTest = await _context.CrashTests.Include(ct => ct.Vehicle)
                                                      .FirstOrDefaultAsync(ct => ct.Id == id);

            if (crashTest == null)
            {
                return NotFound();
            }

            return crashTest;
        }

        // POST: api/crashtests
        [HttpPost]
        public async Task<ActionResult<CrashTest>> PostCrashTest(CrashTestCreateDto crashTestDto)
        {
            // Create a new CrashTest object from the DTO data
            var newCrashTest = new CrashTest
            {
                VehicleId = (int)crashTestDto.VehicleId, // Cast VehicleId to int
                TestType = crashTestDto.TestType,
                HeadInjuryCriterion = crashTestDto.HeadInjuryCriterion,
                PeakDecelerationG = crashTestDto.PeakDecelerationG,
                Notes = crashTestDto.Notes,
                // Set default values for new tests
                TestDate = DateTime.UtcNow,
                OverallResult = ResultStatus.Pending
            };

            // Add the new object to the database
            _context.CrashTests.Add(newCrashTest);
            await _context.SaveChangesAsync();

            // Return a 201 Created response
            // We use the original GetCrashTest method to fetch the newly created object to return it
            return CreatedAtAction(nameof(GetCrashTest), new { id = newCrashTest.Id }, newCrashTest);
        }

        // PUT: api/crashtests/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrashTest(int id, CrashTest crashTest)
        {
            if (id != crashTest.Id)
            {
                return BadRequest();
            }

            _context.Entry(crashTest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.CrashTests.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
    }
}
