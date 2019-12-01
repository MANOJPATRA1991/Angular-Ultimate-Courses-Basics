import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import  { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.css']
})
export class PassengerDetailComponent implements OnChanges, OnInit {
  @Input()
  detail: Passenger;
  editing: boolean = false;
  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output()
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

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

  goToPassenger() {
    this.view.emit(this.detail);
  }
}