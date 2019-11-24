import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

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
  ]
})
export class PassengerDashboardModule { }