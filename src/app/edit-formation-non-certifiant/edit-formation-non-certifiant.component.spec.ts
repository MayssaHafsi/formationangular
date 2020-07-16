import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormationNonCertifiantComponent } from './edit-formation-non-certifiant.component';

describe('EditFormationNonCertifiantComponent', () => {
  let component: EditFormationNonCertifiantComponent;
  let fixture: ComponentFixture<EditFormationNonCertifiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormationNonCertifiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormationNonCertifiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
