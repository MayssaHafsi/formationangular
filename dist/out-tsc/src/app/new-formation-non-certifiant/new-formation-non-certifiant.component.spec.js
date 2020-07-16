import { async, TestBed } from '@angular/core/testing';
import { NewFormationNonCertifiantComponent } from './new-formation-non-certifiant.component';
describe('NewFormationNonCertifiantComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewFormationNonCertifiantComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewFormationNonCertifiantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-formation-non-certifiant.component.spec.js.map