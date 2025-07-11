export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
}

export interface CrashTest {
  id: number;
  testDate: string; // Comes as an ISO string
  testType: 'Frontal' | 'Side' | 'Rollover' | 'Rear';
  headInjuryCriterion: number;
  peakDecelerationG: number;
  notes?: string;
  overallResult: 'Pending' | 'Pass' | 'Fail';
  vehicleId: number;
  vehicle: Vehicle; // The API will include this
}