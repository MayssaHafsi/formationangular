import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttestationFormationComponent } from './attestation-formation.component';

describe('AttestationFormationComponent', () => {
  let component: AttestationFormationComponent;
  let fixture: ComponentFixture<AttestationFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttestationFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttestationFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
