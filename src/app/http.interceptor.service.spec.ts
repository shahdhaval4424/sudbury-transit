import { TestBed } from '@angular/core/testing';

import { Http.InterceptorService } from './http.interceptor.service';

describe('Http.InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Http.InterceptorService = TestBed.get(Http.InterceptorService);
    expect(service).toBeTruthy();
  });
});
