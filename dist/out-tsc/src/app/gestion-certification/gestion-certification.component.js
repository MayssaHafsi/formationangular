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
import { Router } from '@angular/router';
var GestionCertificationComponent = /** @class */ (function () {
    function GestionCertificationComponent(http, route) {
        this.http = http;
        this.route = route;
        this.pag = 0;
        this.s = 4;
        this.mcd = '';
        this.mct = '';
    }
    GestionCertificationComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    GestionCertificationComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    GestionCertificationComponent.prototype.getPage = function () {
        var _this = this;
        // http://localhost:8888/pagerFormation?page='+this.pag+'&size='+this.s
        this.http.get('http://localhost:8888/pagerCertification?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionCertificationComponent.prototype.detailCertification = function (id) {
        this.route.navigate(['detailCertification', id]);
    };
    GestionCertificationComponent.prototype.edit = function (id) {
        this.route.navigate(['editCertification', id]);
    };
    GestionCertificationComponent.prototype.delete = function (c) {
        var _this = this;
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/deleteCertification/' + c.id).subscribe(function (data) {
                console.log(data);
                _this.liste.content.splice(_this.liste.content.indexOf(c), 1);
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    GestionCertificationComponent.prototype.chercherParNom = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherCertificationTheme?mct=' + this.mct).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionCertificationComponent.prototype.chercherParNomDomaine = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherCertificationDomaine?mcd=' + this.mcd).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionCertificationComponent.prototype.cours = function (id) {
        this.route.navigate(['coursCertification', id]);
    };
    GestionCertificationComponent.prototype.chercherParDate = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherCertificationDate?mcdc=' + this.mcdc).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionCertificationComponent = __decorate([
        Component({
            selector: 'app-gestion-certification',
            templateUrl: './gestion-certification.component.html',
            styleUrls: ['./gestion-certification.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], GestionCertificationComponent);
    return GestionCertificationComponent;
}());
export { GestionCertificationComponent };
//# sourceMappingURL=gestion-certification.component.js.map