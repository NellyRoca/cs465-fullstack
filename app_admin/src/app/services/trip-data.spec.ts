import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { TripDataService } from './trip-data';

describe('TripDataService', () => {
  let service: TripDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(TripDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});