import { Component, OnInit, Input } from '@angular/core';
import  { Passenger } from '../../models/passenger.interface';
import  { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No Baggage'
  }, {
    key: 'hand-only',
    value: 'Hand Baggage'
  }, {
    key: 'hold-only',
    value: 'Hold Baggage'
  }, {
    key: 'hand-and-hold',
    value: 'Hand and hold Baggage'
  }];

  constructor() { }

  ngOnInit() { }

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      // this.detail.checkInDate = +new Date();
      // OR
      this.detail.checkInDate = Date.now();
    }
  }

}