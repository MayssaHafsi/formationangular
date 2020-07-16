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
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.nbrInscrit = 0;
        this.nbrf = 0;
        this.nbrc = 0;
        this.showFile = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/demandeurs').subscribe(function (data) {
            _this.listInscrits = data;
            console.log('hhhhhhhhhhhh' + _this.listInscrits.length);
            for (var i = 0; i < _this.listInscrits.length; i++) {
                if (_this.listInscrits[i] != null) {
                    _this.nbrInscrit = _this.nbrInscrit + 1;
                }
            }
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/formations').subscribe(function (data) {
            _this.listF = data;
            console.log('hhhhhhhhhhhh' + _this.listF.length);
            for (var j = 0; j < _this.listF.length; j++) {
                if (_this.listF[j] != null) {
                    _this.nbrf = _this.nbrf + 1;
                }
            }
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/certifs').subscribe(function (data) {
            _this.listC = data;
            console.log('hhhhhhhhhhhh' + _this.listC.length);
            for (var k = 0; k < _this.listC.length; k++) {
                if (_this.listC[k] != null) {
                    _this.nbrc = _this.nbrc + 1;
                }
            }
        }, function (error) { console.log('ereur'); });
    };
    DashboardComponent.prototype.afficher = function (enable) {
        this.showFile = enable;
        if (enable == true) {
            document.getElementById('h').innerHTML = "Presentation 4c";
            document.getElementById('p').innerHTML = "Les Centres de Carrière et de Certification des compétences « 4C » est un projet national qui a pour but d’améliorer l’employabilité des étudiants à travers des programmes de conseil, d’accompagnement, de formation et d’ouverture sur l’environnement socio-économique. Le centre « 4C » est une structure présente dans les établissements universitaires et constitue le maillon entre l’université et les acteurs socio-économiques.";
        }
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['../app.component.scss', './dashboard.component.scss'],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map