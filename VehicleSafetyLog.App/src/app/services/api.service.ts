import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrashTest, Vehicle } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7216/api';

  constructor(private http: HttpClient) { }

  getCrashTests(): Observable<CrashTest[]> {
    return this.http.get<CrashTest[]>(`${this.apiUrl}/crashtests`);
  }

  // Get all vehicles for our dropdown
  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicles`);
  }

  addVehicle(vehicle: Partial<Vehicle>): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.apiUrl}/vehicles`, vehicle);
  }

  // Add a new crash test
  addCrashTest(crashTest: Partial<CrashTest>): Observable<CrashTest> {
    return this.http.post<CrashTest>(`${this.apiUrl}/crashtests`, crashTest);
  }
  getCrashTestById(id: number): Observable<CrashTest> {
    return this.http.get<CrashTest>(`${this.apiUrl}/crashtests/${id}`);
  }
}