import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationFormateurFormationComponent } from './affectation-formateur-formation.component';

describe('AffectationFormateurFormationComponent', () => {
  let component: AffectationFormateurFormationComponent;
  let fixture: ComponentFixture<AffectationFormateurFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationFormateurFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationFormateurFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
