import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripListingComponent } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TripListingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Travlr Getaways Admin!';
}
