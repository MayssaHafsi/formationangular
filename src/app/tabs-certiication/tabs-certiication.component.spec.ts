import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsCertiicationComponent } from './tabs-certiication.component';

describe('TabsCertiicationComponent', () => {
  let component: TabsCertiicationComponent;
  let fixture: ComponentFixture<TabsCertiicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsCertiicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsCertiicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
