import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTrip } from './edit-trip/edit-tripcomponent';
import { TripListingComponent } from './trip-listing/trip-listing.component';

export const routes = [
  { path: '', component: TripListingComponent },
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTrip }
];