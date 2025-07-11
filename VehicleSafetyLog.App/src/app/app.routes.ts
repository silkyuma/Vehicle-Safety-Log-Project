import { Routes } from '@angular/router';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { CrashTestFormComponent } from './components/crash-test-form/crash-test-form.component';
// Import the new component
import { CrashTestDetailComponent } from './components/crash-test-detail/crash-test-detail.component';


export const routes: Routes = [
    { path: 'tests', component: TestListComponent },
    // This is our new dynamic route
    { path: 'tests/:id', component: CrashTestDetailComponent },
    { path: 'add-vehicle', component: VehicleFormComponent },
    { path: 'add-test', component: CrashTestFormComponent },
    { path: '', redirectTo: '/tests', pathMatch: 'full' }
];