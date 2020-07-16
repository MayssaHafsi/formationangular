import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceFormationComponent } from './seance-formation.component';

describe('SeanceFormationComponent', () => {
  let component: SeanceFormationComponent;
  let fixture: ComponentFixture<SeanceFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
