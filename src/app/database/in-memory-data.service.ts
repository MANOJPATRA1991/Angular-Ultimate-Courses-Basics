import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() { 
    const passengers = [
      {
        id: 1,
        fullname: '',
        checkedIn: true,
        checkInDate: 1490742000000,
        baggage: "none"
      },
      {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        baggage: ""
      },
      {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        baggage: ""
      },
      {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        baggage: ""
      },
      {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        baggage: ""
      },
    ];

    return { passengers };
  }
}
