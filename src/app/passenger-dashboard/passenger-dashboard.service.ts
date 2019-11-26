import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import  { Passenger } from './models/passenger.interface';


const PASSENGERS_API: string = 'api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
  }

  // GET
  getPassengers(): Promise<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGERS_API).toPromise();
  }

  // UPDATE
  updatePassenger(passenger: Passenger): Promise<Passenger> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    let options = {
      headers: headers
    }

    return this.http.put<Passenger>(`${PASSENGERS_API}/${passenger.id}`, passenger, options).toPromise();
  }

  // DELETE
  removePassenger(passenger: Passenger): Promise<Passenger> {
    return this.http.delete<Passenger>(`${PASSENGERS_API}/${passenger.id}`).toPromise();
  }
}