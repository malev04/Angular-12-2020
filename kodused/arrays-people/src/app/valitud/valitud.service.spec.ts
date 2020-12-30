import { TestBed } from '@angular/core/testing';

import { ValitudService } from './valitud.service';

describe('ValitudService', () => {
  let service: ValitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
