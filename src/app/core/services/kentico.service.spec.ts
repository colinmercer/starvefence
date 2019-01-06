import { TestBed, inject } from '@angular/core/testing';

import { KenticoClientService } from './kentico.service';

describe('KenticoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KenticoClientService]
    });
  });

  it('should be created', inject([KenticoClientService], (service: KenticoClientService) => {
    expect(service).toBeTruthy();
  }));
});