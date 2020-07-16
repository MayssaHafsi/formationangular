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
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
var EditFormationFormateurComponent = /** @class */ (function () {
    function EditFormationFormateurComponent(route, http, ar) {
        this.route = route;
        this.http = http;
        this.ar = ar;
        this.id = ar.snapshot.params.id;
    }
    EditFormationFormateurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationFormateur/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.aff = data;
        }, function (error) { console.log('ereur'); });
    };
    EditFormationFormateurComponent.prototype.update = function () {
        var _this = this;
        this.http.put('http://localhost:8888/updateFormationFormateur/' + this.aff.id, this.aff).subscribe(function (data) {
            console.log(data);
            alert('bien');
            _this.route.navigate(['formationFormateur', _this.aff.formation.id]);
        }, function (error) { console.log('ereur'); });
    };
    EditFormationFormateurComponent = __decorate([
        Component({
            selector: 'app-edit-formation-formateur',
            templateUrl: './edit-formation-formateur.component.html',
            styleUrls: ['./edit-formation-formateur.component.scss']
        }),
        __metadata("design:paramtypes", [Router, HttpClient, ActivatedRoute])
    ], EditFormationFormateurComponent);
    return EditFormationFormateurComponent;
}());
export { EditFormationFormateurComponent };
//# sourceMappingURL=edit-formation-formateur.component.js.map