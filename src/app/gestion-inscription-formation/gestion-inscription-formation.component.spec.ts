import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionInscriptionFormationComponent } from './gestion-inscription-formation.component';

describe('GestionInscriptionFormationComponent', () => {
  let component: GestionInscriptionFormationComponent;
  let fixture: ComponentFixture<GestionInscriptionFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionInscriptionFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionInscriptionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
