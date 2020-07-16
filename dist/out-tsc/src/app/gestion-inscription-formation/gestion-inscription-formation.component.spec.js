import { async, TestBed } from '@angular/core/testing';
import { GestionInscriptionFormationComponent } from './gestion-inscription-formation.component';
describe('GestionInscriptionFormationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GestionInscriptionFormationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GestionInscriptionFormationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-inscription-formation.component.spec.js.map