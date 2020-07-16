import { async, TestBed } from '@angular/core/testing';
import { DetailFromationNCComponent } from './detail-fromation-nc.component';
describe('DetailFromationNCComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [DetailFromationNCComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(DetailFromationNCComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detail-fromation-nc.component.spec.js.map