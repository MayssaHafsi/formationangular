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
import { Theme } from 'src/model/Theme';
var GestionThemeComponent = /** @class */ (function () {
    function GestionThemeComponent(http, route) {
        this.http = http;
        this.route = route;
        this.pag = 0;
        this.s = 3;
        this.theme = new Theme();
    }
    GestionThemeComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    GestionThemeComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    GestionThemeComponent.prototype.getPage = function () {
        var _this = this;
        //this.pag = p ;
        this.http.get('http://localhost:8888/pagerTheme?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionThemeComponent.prototype.save = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addTheme', this.theme).subscribe(function (data) {
            console.log(data);
            _this.ngOnInit();
            _this.theme.nom = " ";
        }, function (error) {
            console.log("erreur");
        });
    };
    GestionThemeComponent.prototype.niveau = function (c) {
        this.route.navigate(['gestionNiveau', c.id]);
    };
    GestionThemeComponent.prototype.edit = function (id) {
        this.route.navigate(['editTheme', id]);
    };
    GestionThemeComponent.prototype.delete = function (c) {
        var _this = this;
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/deleteTheme/' + c.id).subscribe(function (data) {
                if (data == true)
                    _this.liste.content.splice(_this.liste.content.indexOf(c), 1);
                else {
                    alert("Suppresion imposible !!! Theme possede des niveaux ou affecté a un  formation !");
                }
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    GestionThemeComponent = __decorate([
        Component({
            selector: 'app-gestion-theme',
            templateUrl: './gestion-theme.component.html',
            styleUrls: ['./gestion-theme.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], GestionThemeComponent);
    return GestionThemeComponent;
}());
export { GestionThemeComponent };
//# sourceMappingURL=gestion-theme.component.js.map