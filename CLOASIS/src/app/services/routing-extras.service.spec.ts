import { TestBed } from '@angular/core/testing';

import { RoutingExtrasService } from './routing-extras.service';

describe('RoutingExtrasService', () => {
  let service: RoutingExtrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingExtrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
