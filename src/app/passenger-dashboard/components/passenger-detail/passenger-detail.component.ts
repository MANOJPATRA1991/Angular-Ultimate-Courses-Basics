import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;
  editing: boolean = false;
  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  onNameChange(value:string) {
    this.detail.fullname = value;
    console.log('value:', value);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }


  onRemove() {
    this.remove.emit(this.detail);
  }
}