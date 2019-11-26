import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
// Service
import { PassengerDashboardService } from './passenger-dashboard.service';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

@NgModule({
  imports: [ 
    CommonModule,
    HttpClientModule
  ],
  // Holds all modules relaative to this module
  declarations: [
    // Containers
    PassengerDashboardComponent,
    PassengerViewerComponent,
    // Components
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  exports: [
    PassengerDashboardComponent,
    PassengerViewerComponent
  ],
  // Make the service available to any of the components.
  // This is done through Dependency Injection (DI)
  providers: [PassengerDashboardService]
})
export class PassengerDashboardModule { }