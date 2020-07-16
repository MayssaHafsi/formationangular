import { async, TestBed } from '@angular/core/testing';
import { DetailCertificationAuxInscritComponent } from './detail-certification-aux-inscrit.component';
describe('DetailCertificationAuxInscritComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailCertificationAuxInscritComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailCertificationAuxInscritComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detail-certification-aux-inscrit.component.spec.js.map