import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';

@Component({
selector: 'app-edit-trip',
standalone: true,
imports: [CommonModule, ReactiveFormsModule],
templateUrl: './edit-trip.component.html',
styleUrl: './edit-trip.component.css'
})

export class EditTrip implements OnInit {

  editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {

    let tripCode = localStorage.getItem("tripCode");

    if (!tripCode) {
      alert("Something wrong, couldn't find tripCode!");
      this.router.navigate(['']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripDataService.getTrip(tripCode)
      .subscribe({
        next: (value: any) => {
          this.trip = value;
          this.editForm.patchValue(value[0]);

          this.message = value ? `Trip: ${tripCode} retrieved` : 'No Trip Retrieved!';
        },
        error: (error: any) => console.log(error)
      });
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.tripDataService.updateTrip(this.editForm.value)
        .subscribe({
          next: () => this.router.navigate(['']),
          error: (err) => console.log(err)
        });
    }
  }

  get f() {
    return this.editForm.controls;
  }
}