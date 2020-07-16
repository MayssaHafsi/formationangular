import { async, TestBed } from '@angular/core/testing';
import { AffectationFormateurFormationComponent } from './affectation-formateur-formation.component';
describe('AffectationFormateurFormationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AffectationFormateurFormationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AffectationFormateurFormationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=affectation-formateur-formation.component.spec.js.map