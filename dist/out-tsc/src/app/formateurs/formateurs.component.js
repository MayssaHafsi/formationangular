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
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
var FormateursComponent = /** @class */ (function () {
    function FormateursComponent(route, http) {
        this.route = route;
        this.http = http;
        this.pag = 0;
        this.s = 3;
        this.cin = '';
    }
    FormateursComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    FormateursComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    FormateursComponent.prototype.getPage = function () {
        var _this = this;
        //this.pag = p ;
        this.http.get('http://localhost:8888/pagerFormateur?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    FormateursComponent.prototype.search = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherFormateur?cin=' + this.cin).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    FormateursComponent.prototype.chercherParCin = function () {
        this.search();
    };
    FormateursComponent.prototype.edit = function (cin) {
        this.route.navigate(['editFormateur', cin]);
    };
    FormateursComponent.prototype.delete = function (f) {
        var _this = this;
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/deleteFormateur/' + f.cin).subscribe(function (data) {
                _this.liste.content.splice(_this.liste.content.indexOf(f), 1);
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    FormateursComponent = __decorate([
        Component({
            selector: 'app-formateurs',
            templateUrl: './formateurs.component.html',
            styleUrls: ['./formateurs.component.scss']
        }),
        __metadata("design:paramtypes", [Router, HttpClient])
    ], FormateursComponent);
    return FormateursComponent;
}());
export { FormateursComponent };
//# sourceMappingURL=formateurs.component.js.map