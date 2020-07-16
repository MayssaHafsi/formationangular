import { async, TestBed } from '@angular/core/testing';
import { GestionInscriptionCertificationComponent } from './gestion-inscription-certification.component';
describe('GestionInscriptionCertificationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GestionInscriptionCertificationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GestionInscriptionCertificationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-inscription-certification.component.spec.js.map