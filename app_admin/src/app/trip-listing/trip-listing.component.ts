import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit, DoCheck {

  trips: Trip[] = [];
  message: string = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  private getStuff(): void {
    console.log('GETSTUFF CALLED');

    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          console.log('RAW RESPONSE:', value);

          this.trips = value;

          console.log('AFTER ASSIGN:', this.trips);

          // Force Angular view update
          this.cdr.detectChanges();
        },
        error: (error: any) => {
          console.log('Error:', error);
        }
      });
  }

  ngOnInit(): void {
    console.log('NGONINIT INSTANCE:', this);
    this.getStuff();
  }

  ngDoCheck(): void {
    console.log('DO CHECK:', this.trips.length);
  }
}