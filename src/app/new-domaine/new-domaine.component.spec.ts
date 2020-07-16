import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDomaineComponent } from './new-domaine.component';

describe('NewDomaineComponent', () => {
  let component: NewDomaineComponent;
  let fixture: ComponentFixture<NewDomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
