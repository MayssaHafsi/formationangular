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
import { ActivatedRoute, Router } from '@angular/router';
var EditFormateurComponent = /** @class */ (function () {
    function EditFormateurComponent(http, ar, route) {
        this.http = http;
        this.ar = ar;
        this.route = route;
        this.cin = ar.snapshot.params.cin;
    }
    EditFormateurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormateur/' + this.cin).subscribe(function (data) {
            // @ts-ignore
            _this.formateur = data;
        }, function (error) { console.log('ereur'); });
        ;
    };
    EditFormateurComponent.prototype.update = function () {
        var _this = this;
        this.http.put('http://localhost:8888/updateFormateur/' + this.formateur.cin, this.formateur).subscribe(function (data) {
            console.log(data);
            alert('bien');
            _this.route.navigate(['formateurs']);
        }, function (error) { console.log('ereur'); });
    };
    EditFormateurComponent = __decorate([
        Component({
            selector: 'app-edit-formateur',
            templateUrl: './edit-formateur.component.html',
            styleUrls: ['./edit-formateur.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute, Router])
    ], EditFormateurComponent);
    return EditFormateurComponent;
}());
export { EditFormateurComponent };
//# sourceMappingURL=edit-formateur.component.js.map