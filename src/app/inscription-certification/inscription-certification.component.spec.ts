import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCertificationComponent } from './inscription-certification.component';

describe('InscriptionCertificationComponent', () => {
  let component: InscriptionCertificationComponent;
  let fixture: ComponentFixture<InscriptionCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
