import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.css']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[]

  // Used for services
  constructor(
    private router: Router,
    private passengerService: PassengerDashboardService
  ) { 
    // All this is doing is
    // this.passengerService = PassengerDashboardService;
  }

  // Data fetching should be done here
  ngOnInit() {
    this.passengerService.getPassengers()
    .subscribe((data: Passenger[]) => this.passengers = data);
  }

  handleEdit(event: Passenger) {
    this.passengerService.updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id) {
          passenger = Object.assign({}, passenger, event);
        }
        return passenger;
      });
    })
  }

  handleRemove(event: Passenger) {
    this.passengerService.removePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
    });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}