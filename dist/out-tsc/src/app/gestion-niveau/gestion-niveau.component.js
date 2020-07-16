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
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Niveau } from 'src/model/Niveau';
var GestionNiveauComponent = /** @class */ (function () {
    function GestionNiveauComponent(route, http, ar) {
        this.route = route;
        this.http = http;
        this.ar = ar;
        this.niveau = new Niveau();
        this.id = ar.snapshot.params.id;
    }
    GestionNiveauComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherTheme/' + this.id).subscribe(function (data) {
            // @ts-ignore
            // this.theme = data ;
            _this.niveau.themeNiveau = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/chercherNiveauTheme/' + this.id).subscribe(function (data) {
            // @ts-ignore
            // this.theme = data ;
            _this.listeNiveau = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/chercherTheme/' + this.id).subscribe(function (data) {
            // @ts-ignore
            // this.theme = data ;
            _this.theme = data;
        }, function (error) { console.log('ereur'); });
    };
    GestionNiveauComponent.prototype.save = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addNiveau', this.niveau).subscribe(function (data) {
            console.log(data);
            _this.niveau.nom = " ";
            _this.ngOnInit();
        }, function (error) {
            console.log("erreur");
        });
    };
    GestionNiveauComponent.prototype.edit = function (id) {
        this.route.navigate(['editNiveau', id]);
    };
    GestionNiveauComponent.prototype.delete = function (c) {
        var _this = this;
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/deleteNiveau/' + c.id).subscribe(function (data) {
                if (data == true)
                    _this.listeNiveau.splice(_this.listeNiveau.indexOf(c), 1);
                else {
                    alert("suppresion imposible !! niveau affecté a un certification !!!");
                }
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    GestionNiveauComponent = __decorate([
        Component({
            selector: 'app-gestion-niveau',
            templateUrl: './gestion-niveau.component.html',
            styleUrls: ['./gestion-niveau.component.scss']
        }),
        __metadata("design:paramtypes", [Router, HttpClient, ActivatedRoute])
    ], GestionNiveauComponent);
    return GestionNiveauComponent;
}());
export { GestionNiveauComponent };
//# sourceMappingURL=gestion-niveau.component.js.map