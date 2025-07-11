# Vehicle Safety Log - Full-Stack Application

This is a full-stack web application built to demonstrate proficiency in .NET, C#, Entity Framework Core, Angular, and REST API design. The application serves as an internal tool for a vehicle safety company to log, track, and review crash test data.

---

## Technologies Used

*   **Backend:** .NET 8, C#, ASP.NET Core REST API
*   **Database:** Entity Framework Core, SQLite
*   **Frontend:** Angular 17 (Standalone Components)
*   **Testing:** xUnit (for backend unit tests)

---

## Features

*   **View Data:** Users can view a list of all crash tests, including related vehicle information.
*   **View Details:** Users can click on any test to see a detailed view with all relevant data.
*   **Create Vehicles:** A dedicated form allows users to add new vehicles to the system.
*   **Create Crash Tests:** A dedicated form allows users to log a new crash test, selecting from a dynamic dropdown of existing vehicles.
*   **API Documentation:** The backend includes a Swagger UI for easy API testing and documentation.

---

## How to Run This Project

### Prerequisites

*   .NET 8 SDK
*   Node.js and npm
*   Angular CLI (`npm install -g @angular/cli`)

### 1. Backend API Setup

1.  Open a terminal and navigate to the API project folder:
    ```bash
    cd VehicleSafetyLog.API
    ```

2.  Restore the NuGet packages:
    ```bash
    dotnet restore
    ```

3.  Create and seed the database using Entity Framework migrations:
    ```bash
    dotnet ef database update
    ```

4.  Run the backend server:
    ```bash
    dotnet run
    ```
    The API will now be running, typically on `https://localhost:7216`.

### 2. Frontend Angular App Setup

1.  Open a **new, separate terminal** and navigate to the Angular app folder:
    ```bash
    cd VehicleSafetyLog.App
    ```

2.  Install the required npm packages:
    ```bash
    npm install
    ```

3.  Run the Angular development server:
    ```bash
    ng serve
    ```

4.  Open your browser and navigate to `http://localhost:4200` to use the application.
