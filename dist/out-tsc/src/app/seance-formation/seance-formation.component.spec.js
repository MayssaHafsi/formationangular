import { async, TestBed } from '@angular/core/testing';
import { SeanceFormationComponent } from './seance-formation.component';
describe('SeanceFormationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SeanceFormationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SeanceFormationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=seance-formation.component.spec.js.map