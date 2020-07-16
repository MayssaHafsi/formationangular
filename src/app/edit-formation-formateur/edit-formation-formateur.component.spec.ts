import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormationFormateurComponent } from './edit-formation-formateur.component';

describe('EditFormationFormateurComponent', () => {
  let component: EditFormationFormateurComponent;
  let fixture: ComponentFixture<EditFormationFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFormationFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormationFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
