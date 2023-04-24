import { TestBed } from '@angular/core/testing';

import { AuthServicePhpService } from './auth-service-php.service';

describe('AuthServicePhpService', () => {
  let service: AuthServicePhpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServicePhpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
