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
var DomainesComponent = /** @class */ (function () {
    function DomainesComponent(http, route) {
        this.http = http;
        this.route = route;
        this.pag = 0;
        this.s = 3;
        this.nom = '';
    }
    DomainesComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    DomainesComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    DomainesComponent.prototype.getPage = function () {
        var _this = this;
        //this.pag = p ;
        this.http.get('http://localhost:8888/pager?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    DomainesComponent.prototype.delete = function (c) {
        var _this = this;
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/deleteDomaine/' + c.id).subscribe(function (data) {
                if (data == true)
                    _this.liste.content.splice(_this.liste.content.indexOf(c), 1);
                else {
                    alert(" Suppresion imposible !! domaine affecté a un formation ou un certification !! ");
                }
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    DomainesComponent.prototype.edit = function (id) {
        this.route.navigate(['editDomaine', id]);
    };
    DomainesComponent.prototype.chercher = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerChercherDomaineNom?nom=' + this.nom).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    DomainesComponent = __decorate([
        Component({
            selector: 'app-domaines',
            templateUrl: './domaines.component.html',
            styleUrls: ['./domaines.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], DomainesComponent);
    return DomainesComponent;
}());
export { DomainesComponent };
//# sourceMappingURL=domaines.component.js.map