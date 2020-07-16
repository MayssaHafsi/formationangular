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
var TabsComponent = /** @class */ (function () {
    function TabsComponent(http, route) {
        this.http = http;
        this.route = route;
        this.showFile = false;
        this.pag = 0;
        this.s = 10;
        this.mc = '';
        this.mcd = '';
        this.mct = '';
    }
    ;
    TabsComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    TabsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPage();
        this.http.get('http://localhost:8888/domaines').subscribe(function (data) {
            _this.listDomaine = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/themes').subscribe(function (data) {
            _this.listTheme = data;
        }, function (error) { console.log('ereur'); });
    };
    TabsComponent.prototype.getPage = function () {
        var _this = this;
        //this.pag = p ;
        this.http.get('http://localhost:8888/formationsCon?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    TabsComponent.prototype.detailler = function (id) {
        this.route.navigate(['detailFormationNC', id]);
    };
    TabsComponent.prototype.inscrire = function (id) {
        this.route.navigate(['inscrireFormation', id]);
    };
    TabsComponent.prototype.chercherParNomDomaine = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherFormationDomaineC?mcd=' + this.mcd).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    TabsComponent.prototype.chercherParNomTheme = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherFormationThemeC?mct=' + this.mct).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    TabsComponent.prototype.chercherParType = function () {
        var _this = this;
        if (this.mc == 'fc') {
            this.http.get('http://localhost:8888/pagerFCC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
        else if (this.mc == 'fnc') {
            this.http.get('http://localhost:8888/pagerFNCC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
    };
    TabsComponent.prototype.showFiles = function (en) {
        if (en == true) {
            this.showFile = true;
        }
        else {
            this.showFile = false;
        }
    };
    TabsComponent = __decorate([
        Component({
            selector: 'app-tabs',
            templateUrl: './tabs.component.html',
            styleUrls: ['./tabs.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], TabsComponent);
    return TabsComponent;
}());
export { TabsComponent };
//# sourceMappingURL=tabs.component.js.map