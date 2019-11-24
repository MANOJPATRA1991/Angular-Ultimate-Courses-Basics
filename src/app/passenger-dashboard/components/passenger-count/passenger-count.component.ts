import { Component, Input } from '@angular/core';
import  { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-count',
  templateUrl: './passenger-count.component.html',
  styleUrls: ['./passenger-count.component.css']
})
export class PassengerCountComponent {
  @Input()
  items: Passenger[];

  checkedInCount(): number {
    if (!this.items) return;

    return this.items.filter((item: Passenger) => item.checkedIn).length;
  }
}