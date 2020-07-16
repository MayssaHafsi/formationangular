import { async, TestBed } from '@angular/core/testing';
import { GestionNiveauComponent } from './gestion-niveau.component';
describe('GestionNiveauComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GestionNiveauComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GestionNiveauComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-niveau.component.spec.js.map