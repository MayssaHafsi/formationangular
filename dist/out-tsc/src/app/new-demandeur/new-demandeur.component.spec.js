import { async, TestBed } from '@angular/core/testing';
import { NewDemandeurComponent } from './new-demandeur.component';
describe('NewDemandeurComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewDemandeurComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewDemandeurComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=new-demandeur.component.spec.js.map