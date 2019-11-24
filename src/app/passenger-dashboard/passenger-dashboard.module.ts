import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
  imports: [ CommonModule ],
  // Holds all modules relaative to this module
  declarations: [
    PassengerDashboardComponent
  ],
  exports: [
    PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule { }