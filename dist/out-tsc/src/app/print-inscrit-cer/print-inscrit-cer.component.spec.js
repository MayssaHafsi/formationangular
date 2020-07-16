import { async, TestBed } from '@angular/core/testing';
import { PrintInscritCerComponent } from './print-inscrit-cer.component';
describe('PrintInscritCerComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [PrintInscritCerComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(PrintInscritCerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=print-inscrit-cer.component.spec.js.map