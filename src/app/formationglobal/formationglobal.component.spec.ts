import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationglobalComponent } from './formationglobal.component';

describe('FormationglobalComponent', () => {
  let component: FormationglobalComponent;
  let fixture: ComponentFixture<FormationglobalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationglobalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationglobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
