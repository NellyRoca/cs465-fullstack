import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {

  trips: Trip[] = [];
  message: string = '';

  constructor(private tripDataService: TripDataService) {
    console.log('trip-listing constructor');
  }

  private getStuff(): void {
  this.tripDataService.getTrips()
    .subscribe({
      next: (value: any) => {

        // DEBUG GOES HERE
        console.log('RAW RESPONSE:', value);
        console.log('IS ARRAY:', Array.isArray(value));

        this.trips = value;

        console.log('ASSIGNED TRIPS:', this.trips);
      },
      error: (error: any) => {
        console.log('Error:', error);
      }
    });
}

  ngOnInit(): void {
    this.getStuff();
  }
}

