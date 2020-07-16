var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
var EditCertificationComponent = /** @class */ (function () {
    function EditCertificationComponent(http, route, ar) {
        this.http = http;
        this.route = route;
        this.ar = ar;
        this.id = ar.snapshot.params.id;
    }
    EditCertificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherCertification/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.certification = data;
        }, function (error) { console.log('ereur'); });
        ;
    };
    EditCertificationComponent.prototype.update = function () {
        var _this = this;
        this.http.put('http://localhost:8888/updateCertification/' + this.certification.id, this.certification).subscribe(function (data) {
            console.log(data);
            alert('bien');
            _this.route.navigate(['gestionCertification']);
        }, function (error) { console.log('ereur'); });
    };
    EditCertificationComponent = __decorate([
        Component({
            selector: 'app-edit-certification',
            templateUrl: './edit-certification.component.html',
            styleUrls: ['./edit-certification.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router, ActivatedRoute])
    ], EditCertificationComponent);
    return EditCertificationComponent;
}());
export { EditCertificationComponent };
//# sourceMappingURL=edit-certification.component.js.map