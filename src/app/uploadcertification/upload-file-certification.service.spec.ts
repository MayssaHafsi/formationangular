import { TestBed } from '@angular/core/testing';

import { UploadFileCertificationService } from './upload-file-certification.service';

describe('UploadFileCertificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadFileCertificationService = TestBed.get(UploadFileCertificationService);
    expect(service).toBeTruthy();
  });
});
