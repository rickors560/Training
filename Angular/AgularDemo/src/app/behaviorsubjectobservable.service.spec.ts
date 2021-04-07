import { TestBed } from '@angular/core/testing';

import { BehaviorsubjectobservableService } from './behaviorsubjectobservable.service';

describe('BehaviorsubjectobservableService', () => {
  let service: BehaviorsubjectobservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorsubjectobservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
