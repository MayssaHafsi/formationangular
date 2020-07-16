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
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
var EditDomaineComponent = /** @class */ (function () {
    function EditDomaineComponent(ar, route, http) {
        this.ar = ar;
        this.route = route;
        this.http = http;
        this.id = ar.snapshot.params.id;
    }
    EditDomaineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercher/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.domaine = data;
        }, function (error) { console.log('ereur'); });
        ;
    };
    EditDomaineComponent.prototype.update = function () {
        var _this = this;
        this.http.put('http://localhost:8888/updateDomaine/' + this.domaine.id, this.domaine).subscribe(function (data) {
            console.log(data);
            alert('bien');
            _this.route.navigate(['domaines']);
        }, function (error) { console.log('ereur'); });
    };
    EditDomaineComponent = __decorate([
        Component({
            selector: 'app-edit-domaine',
            templateUrl: './edit-domaine.component.html',
            styleUrls: ['./edit-domaine.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute, Router, HttpClient])
    ], EditDomaineComponent);
    return EditDomaineComponent;
}());
export { EditDomaineComponent };
//# sourceMappingURL=edit-domaine.component.js.map