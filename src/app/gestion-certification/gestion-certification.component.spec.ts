import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCertificationComponent } from './gestion-certification.component';

describe('GestionCertificationComponent', () => {
  let component: GestionCertificationComponent;
  let fixture: ComponentFixture<GestionCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
