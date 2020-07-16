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
import { Domaine } from '../../model/Domaine';
import { Router } from '@angular/router';
var NewDomaineComponent = /** @class */ (function () {
    function NewDomaineComponent(http, route) {
        this.http = http;
        this.route = route;
        this.domaine = new Domaine();
    }
    NewDomaineComponent.prototype.ngOnInit = function () {
    };
    NewDomaineComponent.prototype.save = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addDomaine', this.domaine).subscribe(function (data) {
            console.log(data);
            _this.route.navigate(['/domaines']);
        }, function (error) {
            console.log("erreur");
        });
    };
    NewDomaineComponent = __decorate([
        Component({
            selector: 'app-new-domaine',
            templateUrl: './new-domaine.component.html',
            styleUrls: ['./new-domaine.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], NewDomaineComponent);
    return NewDomaineComponent;
}());
export { NewDomaineComponent };
//# sourceMappingURL=new-domaine.component.js.map