import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestListComponent } from './components/test-list/test-list.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'VehicleSafetyLog.App';
}