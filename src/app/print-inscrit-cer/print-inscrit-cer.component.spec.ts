import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInscritCerComponent } from './print-inscrit-cer.component';

describe('PrintInscritCerComponent', () => {
  let component: PrintInscritCerComponent;
  let fixture: ComponentFixture<PrintInscritCerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintInscritCerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintInscritCerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
