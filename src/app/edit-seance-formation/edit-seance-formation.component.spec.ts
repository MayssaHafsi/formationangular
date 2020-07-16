import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSeanceFormationComponent } from './edit-seance-formation.component';

describe('EditSeanceFormationComponent', () => {
  let component: EditSeanceFormationComponent;
  let fixture: ComponentFixture<EditSeanceFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSeanceFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeanceFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
