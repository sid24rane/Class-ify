/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginLogoutService } from './login-logout.service';

describe('LoginLogoutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginLogoutService]
    });
  });

  it('should ...', inject([LoginLogoutService], (service: LoginLogoutService) => {
    expect(service).toBeTruthy();
  }));
});
