import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Vehicle } from '../../models';

@Component({
    selector: 'app-crash-test-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './crash-test-form.component.html',
    styleUrls: ['./crash-test-form.component.css']
})
export class CrashTestFormComponent implements OnInit {

    vehicles: Vehicle[] = [];

    crashTestForm = new FormGroup({
        vehicleId: new FormControl('', Validators.required),
        testType: new FormControl('Frontal', Validators.required),
        headInjuryCriterion: new FormControl(0, Validators.required),
        peakDecelerationG: new FormControl(0, Validators.required),
        notes: new FormControl(''),
    });

    constructor(private apiService: ApiService, private router: Router) { }

    ngOnInit(): void {
        this.apiService.getVehicles().subscribe(data => {
            this.vehicles = data;
        });
    }

    onSubmit(): void {
        if (this.crashTestForm.valid) {
            const formValue = this.crashTestForm.value;

            // Create a new, correctly typed object for the API
            const crashTestData = {
                vehicleId: Number(formValue.vehicleId!),
                // Assert the specific type for testType
                testType: formValue.testType! as 'Frontal' | 'Side' | 'Rollover' | 'Rear',
                headInjuryCriterion: formValue.headInjuryCriterion!,
                peakDecelerationG: formValue.peakDecelerationG!,
                notes: formValue.notes!,
                testDate: new Date().toISOString(),
                overallResult: 'Pending' as 'Pending' | 'Pass' | 'Fail'
            };

            this.apiService.addCrashTest(crashTestData).subscribe({
                next: (response) => {
                    console.log('Crash test added successfully!', response);
                    this.router.navigate(['/tests']);
                },
                error: (err) => console.error('Error adding crash test', err)
            });
        }
    }
}