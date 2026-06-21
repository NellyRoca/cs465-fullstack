import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css'],
})
export class TripCardComponent {

  @Input() trip: any;

  constructor() {
    console.log('>>> TRIP CARD CONSTRUCTOR FIRED');
  }
}