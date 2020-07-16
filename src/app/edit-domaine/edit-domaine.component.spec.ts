import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDomaineComponent } from './edit-domaine.component';

describe('EditDomaineComponent', () => {
  let component: EditDomaineComponent;
  let fixture: ComponentFixture<EditDomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
