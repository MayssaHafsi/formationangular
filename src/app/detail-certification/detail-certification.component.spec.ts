import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCertificationComponent } from './detail-certification.component';

describe('DetailCertificationComponent', () => {
  let component: DetailCertificationComponent;
  let fixture: ComponentFixture<DetailCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
