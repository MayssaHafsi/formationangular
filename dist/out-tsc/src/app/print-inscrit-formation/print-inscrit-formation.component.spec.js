import { async, TestBed } from '@angular/core/testing';
import { PrintInscritFormationComponent } from './print-inscrit-formation.component';
describe('PrintInscritFormationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PrintInscritFormationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PrintInscritFormationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=print-inscrit-formation.component.spec.js.map