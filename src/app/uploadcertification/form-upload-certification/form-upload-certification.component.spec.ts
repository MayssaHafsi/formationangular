import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUploadCertificationComponent } from './form-upload-certification.component';

describe('FormUploadCertificationComponent', () => {
  let component: FormUploadCertificationComponent;
  let fixture: ComponentFixture<FormUploadCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUploadCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUploadCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
