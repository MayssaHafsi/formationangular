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
import { Demandeur } from 'src/model/Demandeur';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var NewDemandeurComponent = /** @class */ (function () {
    function NewDemandeurComponent(http, route) {
        this.http = http;
        this.route = route;
        this.demandeur = new Demandeur();
    }
    NewDemandeurComponent.prototype.ngOnInit = function () {
    };
    NewDemandeurComponent.prototype.save = function () {
        this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(function (data) {
            console.log(data);
            //this.route.navigate(['/domaines']) ;
        }, function (error) {
            console.log("erreur");
        });
    };
    NewDemandeurComponent = __decorate([
        Component({
            selector: 'app-new-demandeur',
            templateUrl: './new-demandeur.component.html',
            styleUrls: ['./new-demandeur.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], NewDemandeurComponent);
    return NewDemandeurComponent;
}());
export { NewDemandeurComponent };
//# sourceMappingURL=new-demandeur.component.js.map