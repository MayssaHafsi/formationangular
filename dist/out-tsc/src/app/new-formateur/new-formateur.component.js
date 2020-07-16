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
import { Formateur } from '../../model/Formateur';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var NewFormateurComponent = /** @class */ (function () {
    function NewFormateurComponent(http, route) {
        this.http = http;
        this.route = route;
        this.formateur = new Formateur();
    }
    NewFormateurComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/formateurs').subscribe(function (data) {
            _this.liste = data;
        }, function (error) { console.log('ereur'); });
    };
    NewFormateurComponent.prototype.save = function () {
        var _this = this;
        for (var i = 0; i < this.liste.length; i++) {
            if (this.liste[i].cin == this.formateur.cin)
                alert('impo');
        }
        this.http.post('http://localhost:8888/addFormateur', this.formateur).subscribe(function (data) {
            console.log(data);
            _this.route.navigate(['/formateurs']);
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormateurComponent = __decorate([
        Component({
            selector: 'app-new-formateur',
            templateUrl: './new-formateur.component.html',
            styleUrls: ['./new-formateur.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], NewFormateurComponent);
    return NewFormateurComponent;
}());
export { NewFormateurComponent };
//# sourceMappingURL=new-formateur.component.js.map