using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using VehicleSafetyLog.API.Data;
using VehicleSafetyLog.API.Services;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

// CORS Policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddDbContext<ApiDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// JSON Configuration for loop handling and enums
builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
    });

// Other services...
builder.Services.AddScoped<ITestResultService, TestResultService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


// ==========================================================

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// *** THIS IS THE CRITICAL PART ***
// UseCors must be called before UseAuthorization.
app.UseCors("AllowAngularApp");

app.UseAuthorization();

app.MapControllers();

app.Run();