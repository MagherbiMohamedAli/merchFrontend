import { TestBed } from '@angular/core/testing';

import { LocalStoregService } from './local-storeg.service';

describe('LocalStoregService', () => {
  let service: LocalStoregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
