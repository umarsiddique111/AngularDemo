import { TestBed, inject } from '@angular/core/testing';

import { RegistartionService } from './registartion.service';

describe('RegistartionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistartionService]
    });
  });

  it('should be created', inject([RegistartionService], (service: RegistartionService) => {
    expect(service).toBeTruthy();
  }));
});
