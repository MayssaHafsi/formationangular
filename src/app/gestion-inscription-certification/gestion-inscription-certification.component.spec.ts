import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionCertificationComponent } from './gestion-inscription-certification.component';

describe('GestionInscriptionCertificationComponent', () => {
  let component: GestionInscriptionCertificationComponent;
  let fixture: ComponentFixture<GestionInscriptionCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
