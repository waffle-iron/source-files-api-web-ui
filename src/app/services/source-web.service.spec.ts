import { TestBed, inject } from '@angular/core/testing';

import { SourceWebService } from './source-web.service';

describe('SourceWebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceWebService]
    });
  });

  it('should ...', inject([SourceWebService], (service: SourceWebService) => {
    expect(service).toBeTruthy();
  }));
});
