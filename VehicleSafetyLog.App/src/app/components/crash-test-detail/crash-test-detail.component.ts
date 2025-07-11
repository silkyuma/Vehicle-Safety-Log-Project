import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Import ActivatedRoute and RouterLink
import { ApiService } from '../../services/api.service';
import { CrashTest } from '../../models';

@Component({
    selector: 'app-crash-test-detail',
    standalone: true,
    imports: [CommonModule, RouterLink, DatePipe], // Import RouterLink for the back button
    templateUrl: './crash-test-detail.component.html',
    styleUrls: ['./crash-test-detail.component.css']
})
export class CrashTestDetailComponent implements OnInit {
    // Use a nullable type, as the test data won't exist until it's fetched
    crashTest: CrashTest | null = null;
    isLoading = true;
    errorMessage = '';

    // Inject ActivatedRoute to get information about the current URL
    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService
    ) { }

    ngOnInit(): void {
        // Get the 'id' parameter from the URL
        const id = this.route.snapshot.paramMap.get('id');

        // Make sure the ID exists and is a valid number
        if (id) {
            this.apiService.getCrashTestById(+id).subscribe({ // The '+' converts the string id to a number
                next: (data) => {
                    this.crashTest = data;
                    this.isLoading = false;
                },
                error: (err) => {
                    this.errorMessage = 'Could not load crash test data.';
                    this.isLoading = false;
                    console.error(err);
                }
            });
        }
    }
}