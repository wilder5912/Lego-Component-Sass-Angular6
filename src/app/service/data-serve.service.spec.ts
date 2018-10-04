import { TestBed, inject } from '@angular/core/testing';

import { DataServeService } from './data-serve.service';

describe('DataServeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataServeService]
    });
  });

  it('should be created', inject([DataServeService], (service: DataServeService) => {
    expect(service).toBeTruthy();
  }));
});
