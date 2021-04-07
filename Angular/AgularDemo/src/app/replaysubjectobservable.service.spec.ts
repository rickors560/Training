import { TestBed } from '@angular/core/testing';

import { ReplaysubjectobservableService } from './replaysubjectobservable.service';

describe('ReplaysubjectobservableService', () => {
  let service: ReplaysubjectobservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaysubjectobservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
