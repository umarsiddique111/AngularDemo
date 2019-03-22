import { TestBed, inject } from '@angular/core/testing';

import { AllpostService } from './allpost.service';

describe('AllpostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllpostService]
    });
  });

  it('should be created', inject([AllpostService], (service: AllpostService) => {
    expect(service).toBeTruthy();
  }));
});
