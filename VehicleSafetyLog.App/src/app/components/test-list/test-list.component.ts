import { Component, OnInit } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CrashTest } from '../../models';

@Component({
  selector: 'app-test-list',
  standalone: true,
  imports: [NgClass, DatePipe, RouterModule],
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
  tests: CrashTest[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCrashTests().subscribe(data => {
      this.tests = data;
    });
  }

  getResultClass(result: string): string {
    switch (result) {
      case 'Pass': return 'result-pass';
      case 'Fail': return 'result-fail';
      default: return 'result-pending';
    }
  }
}