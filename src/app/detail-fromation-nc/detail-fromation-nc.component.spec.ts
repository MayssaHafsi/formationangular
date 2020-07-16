import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFromationNCComponent } from './detail-fromation-nc.component';

describe('DetailFromationNCComponent', () => {
  let component: DetailFromationNCComponent;
  let fixture: ComponentFixture<DetailFromationNCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFromationNCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFromationNCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
