import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
// Service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
  imports: [ CommonModule ],
  // Holds all modules relaative to this module
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports: [
    PassengerDashboardComponent
  ],
  // Make the service available to any of the components.
  // This is done through Dependency Injection (DI)
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule { }