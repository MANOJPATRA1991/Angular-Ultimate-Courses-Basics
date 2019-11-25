import { Component, OnInit } from '@angular/core';
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
  constructor(private passengerService: PassengerDashboardService) { 
    // All this is doing is
    // this.passengerService = PassengerDashboardService;
  }

  // Data fetching should be done here
  ngOnInit() {
    this.passengers = this.passengerService.getPassengers();
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
  }
}