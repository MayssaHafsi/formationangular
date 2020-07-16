import { async, TestBed } from '@angular/core/testing';
import { EditFormationNonCertifiantComponent } from './edit-formation-non-certifiant.component';
describe('EditFormationNonCertifiantComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditFormationNonCertifiantComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditFormationNonCertifiantComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-formation-non-certifiant.component.spec.js.map