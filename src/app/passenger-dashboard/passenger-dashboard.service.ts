import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import  { Passenger } from './models/passenger.interface';


const PASSENGERS_API: string = 'api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: HttpClient) {
  }

  // GET
  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(PASSENGERS_API)
    .pipe(
      map((response: Passenger[]) => response),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  // GET-ONE
  getPassenger(id: number): Observable<Passenger> {
    return this.http.get<Passenger>(`${PASSENGERS_API}/${id}`)
    .pipe(
      map((response: Passenger) => response),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  // UPDATE
  updatePassenger(passenger: Passenger): Observable<Passenger> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })

    let options = {
      headers: headers
    }

    return this.http.put<Passenger>(`${PASSENGERS_API}/${passenger.id}`, passenger, options)
    .pipe(
      map((response: Passenger) => response),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }

  // DELETE
  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.delete<Passenger>(`${PASSENGERS_API}/${passenger.id}`)
    .pipe(
      map((response: Passenger) => response),
      catchError((error: any) => Observable.throw(error.json()))
    );
  }
}