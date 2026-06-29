import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  private url = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url + '?ts=' + Date.now());
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, trip);
  }

  getTrip(tripCode: string): Observable<Trip> {
    return this.http.get<Trip>(this.url + '/' + tripCode);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }
}