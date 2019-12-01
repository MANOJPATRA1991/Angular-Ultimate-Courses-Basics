import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
// Service
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

const routes: Routes = [
  { path: 'passengers', component: PassengerDashboardComponent }
];

@NgModule({
  imports: [ 
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  // Holds all modules relative to this module
  declarations: [
    // Containers
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // Components
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent
  ],
  // Make the service available to any of the components.
  // This is done through Dependency Injection (DI)
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule { }