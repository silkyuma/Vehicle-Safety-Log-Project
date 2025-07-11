import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-vehicle-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule], // Import ReactiveFormsModule
    templateUrl: './vehicle-form.component.html',
    styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {
    // Define the form structure and validation rules
    vehicleForm = new FormGroup({
        make: new FormControl('', [Validators.required]),
        model: new FormControl('', [Validators.required]),
        year: new FormControl(new Date().getFullYear(), [Validators.required, Validators.min(1900)])
    });

    // Inject the ApiService and Router
    constructor(private apiService: ApiService, private router: Router) { }

    // This method will be called when the form is submitted
    onSubmit(): void {
        // Check if the form is valid before submitting
        if (this.vehicleForm.valid) {

            const vehicleData = {
                make: this.vehicleForm.value.make!,
                model: this.vehicleForm.value.model!,
                year: this.vehicleForm.value.year!
            };

            console.log('Submitting form:', vehicleData);

            this.apiService.addVehicle(vehicleData).subscribe({
                next: (response) => {
                    console.log('Vehicle added successfully!', response);
                    this.router.navigate(['/tests']);
                },
                error: (err) => {
                    console.error('Error adding vehicle', err);
                }
            });
        } else {
            console.error('Form is invalid');
        }
    }
}