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
var GestionformationComponent = /** @class */ (function () {
    function GestionformationComponent(http, route) {
        this.http = http;
        this.route = route;
        this.pag = 0;
        this.s = 4;
        this.datedebut = new Date();
        this.datefin = new Date();
        this.mc = '';
        this.mct = '';
        this.mcd = '';
    }
    GestionformationComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    GestionformationComponent.prototype.getPage = function () {
        var _this = this;
        // http://localhost:8888/pagerFormation?page='+this.pag+'&size='+this.s
        this.http.get('http://localhost:8888/pagerFormation?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionformationComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    GestionformationComponent.prototype.search = function () {
        var _this = this;
        this.http.get('http://localhost:8888/ChercherformationDate?datedebut=' + new Date(this.datedebut) + '&datefin=' + new Date(this.datefin)).subscribe(function (data) {
            console.log(_this.datedebut);
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionformationComponent.prototype.chercherParDate = function () {
        this.search();
    };
    GestionformationComponent.prototype.formateur = function (id) {
        this.route.navigate(['formationFormateur', id]);
    };
    GestionformationComponent.prototype.detailFormation = function (id) {
        this.route.navigate(['detailFormation', id]);
    };
    GestionformationComponent.prototype.edit = function (id) {
        this.route.navigate(['editFormationNC', id]);
    };
    GestionformationComponent.prototype.delete = function (fnc) {
        var _this = this;
        if (fnc.type == 'FNC') {
            var conf = window.confirm('est vous sur de suprimer ?');
            if (conf === true) {
                this.http.delete('http://localhost:8888/deleteFormationNC/' + fnc.id).subscribe(function (data) {
                    _this.liste.content.splice(_this.liste.content.indexOf(fnc), 1);
                }, function (error) {
                    console.log('ereur');
                });
            }
        }
        else {
            var conf = window.confirm('est vous sur de suprimer ca ?');
            if (conf === true) {
                this.http.delete('http://localhost:8888/deleteFormationC/' + fnc.id).subscribe(function (data) {
                    _this.liste.content.splice(_this.liste.content.indexOf(fnc), 1);
                }, function (error) {
                    console.log('ereur');
                });
            }
        }
    };
    GestionformationComponent.prototype.chercher = function () {
        var _this = this;
        if (this.mc == 'fc') {
            this.http.get('http://localhost:8888/pagerFC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
        else if (this.mc == 'fnc') {
            this.http.get('http://localhost:8888/pagerFNC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
    };
    GestionformationComponent.prototype.cours = function (id) {
        this.route.navigate(['cours', id]);
    };
    GestionformationComponent.prototype.chercherParNom = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherFormationTheme?mct=' + this.mct).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionformationComponent.prototype.chercherParNomDomaine = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherFormationDomaine?mcd=' + this.mcd).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionformationComponent = __decorate([
        Component({
            selector: 'app-gestionformation',
            templateUrl: './gestionformation.component.html',
            styleUrls: ['./gestionformation.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], GestionformationComponent);
    return GestionformationComponent;
}());
export { GestionformationComponent };
//# sourceMappingURL=gestionformation.component.js.map