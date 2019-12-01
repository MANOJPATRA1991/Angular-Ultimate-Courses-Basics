import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import  { Passenger } from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.css']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService
  ) { }

  ngOnInit() {
    this.route.params
    .pipe(
      switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
    )
    .subscribe((data: Passenger) => this.passenger = data);    
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => this.passenger = Object.assign({}, this.passenger, event));
  }

  goBack() {
    // Imperative routing as we are using the native API rather than something like routerLink
    this.router.navigate(['/passengers']);
  }
}