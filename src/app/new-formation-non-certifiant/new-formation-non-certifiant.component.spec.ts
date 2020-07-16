import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormationNonCertifiantComponent } from './new-formation-non-certifiant.component';

describe('NewFormationNonCertifiantComponent', () => {
  let component: NewFormationNonCertifiantComponent;
  let fixture: ComponentFixture<NewFormationNonCertifiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormationNonCertifiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormationNonCertifiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
