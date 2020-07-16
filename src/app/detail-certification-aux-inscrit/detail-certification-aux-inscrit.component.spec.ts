import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCertificationAuxInscritComponent } from './detail-certification-aux-inscrit.component';

describe('DetailCertificationAuxInscritComponent', () => {
  let component: DetailCertificationAuxInscritComponent;
  let fixture: ComponentFixture<DetailCertificationAuxInscritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCertificationAuxInscritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCertificationAuxInscritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
