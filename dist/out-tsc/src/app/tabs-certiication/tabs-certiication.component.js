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
var TabsCertiicationComponent = /** @class */ (function () {
    function TabsCertiicationComponent(route, http) {
        this.route = route;
        this.http = http;
        this.showFile = false;
        this.pag = 0;
        this.s = 10;
        this.mcd = '';
        this.mct = '';
    }
    TabsCertiicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPage();
        this.http.get('http://localhost:8888/domaines').subscribe(function (data) {
            _this.listDomaine = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/themes').subscribe(function (data) {
            _this.listTheme = data;
        }, function (error) { console.log('ereur'); });
    };
    TabsCertiicationComponent.prototype.getPage = function () {
        var _this = this;
        this.http.get('http://localhost:8888/CertificationCon?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    TabsCertiicationComponent.prototype.inscrire = function (id) {
        this.route.navigate(['inscrireCertification', id]);
    };
    TabsCertiicationComponent.prototype.detailler = function (id) {
        this.route.navigate(['detailCertInscrit', id]);
    };
    TabsCertiicationComponent.prototype.chercherParNomDomaine = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherCertificationDomaineC?mcd=' + this.mcd).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    TabsCertiicationComponent.prototype.chercherParNomTheme = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherCertificationThemeC?mct=' + this.mct).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    TabsCertiicationComponent.prototype.chercherParDate = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherCertificationDateC?mcdc=' + this.mcdc).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    TabsCertiicationComponent.prototype.showFiles = function (en) {
        if (en == true) {
            this.showFile = true;
        }
        else {
            this.showFile = false;
        }
    };
    TabsCertiicationComponent = __decorate([
        Component({
            selector: 'app-tabs-certiication',
            templateUrl: './tabs-certiication.component.html',
            styleUrls: ['./tabs-certiication.component.scss']
        }),
        __metadata("design:paramtypes", [Router, HttpClient])
    ], TabsCertiicationComponent);
    return TabsCertiicationComponent;
}());
export { TabsCertiicationComponent };
//# sourceMappingURL=tabs-certiication.component.js.map