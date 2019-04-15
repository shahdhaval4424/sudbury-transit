import { TestBed } from '@angular/core/testing';

import { App.FactoryService } from './app.factory.service';

describe('App.FactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: App.FactoryService = TestBed.get(App.FactoryService);
    expect(service).toBeTruthy();
  });
});
