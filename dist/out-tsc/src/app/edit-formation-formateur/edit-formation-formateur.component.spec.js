import { async, TestBed } from '@angular/core/testing';
import { EditFormationFormateurComponent } from './edit-formation-formateur.component';
describe('EditFormationFormateurComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EditFormationFormateurComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EditFormationFormateurComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-formation-formateur.component.spec.js.map