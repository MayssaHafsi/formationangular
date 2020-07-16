import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintInscritFormationComponent } from './print-inscrit-formation.component';

describe('PrintInscritFormationComponent', () => {
  let component: PrintInscritFormationComponent;
  let fixture: ComponentFixture<PrintInscritFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintInscritFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintInscritFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
