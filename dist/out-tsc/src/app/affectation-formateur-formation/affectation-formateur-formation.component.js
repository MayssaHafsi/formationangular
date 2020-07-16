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
import { FormationFormateur } from 'src/model/FormationFormateur';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/model/Formation';
import { Formateur } from 'src/model/Formateur';
var AffectationFormateurFormationComponent = /** @class */ (function () {
    function AffectationFormateurFormationComponent(http, ar, route) {
        this.http = http;
        this.ar = ar;
        this.route = route;
        this.ff = new Formation();
        this.aff = new FormationFormateur();
        this.pag = 0;
        this.s = 3;
        this.id = ar.snapshot.params.id;
    }
    AffectationFormateurFormationComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPages();
    };
    AffectationFormateurFormationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationG/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.aff.formation = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/formateurs').subscribe(function (data) {
            _this.listFormateur = data;
        }, function (error) { console.log('ereur'); });
        this.getPages();
    };
    AffectationFormateurFormationComponent.prototype.getPages = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerFormationFormateur/' + this.id + '?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.listFormationFormateur = data;
            _this.pages = new Array(_this.listFormationFormateur.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    AffectationFormateurFormationComponent.prototype.affecter = function () {
        var _this = this;
        if (this.aff.datedebut < this.aff.formation.datedebut || this.aff.datefin > this.aff.formation.datefin) {
            alert('verifier date debut et date fin');
        }
        else {
            this.http.post('http://localhost:8888/addFormationFormateur', this.aff).subscribe(function (data) {
                console.log(data);
                _this.route.navigate(['/formationFormateur/' + _this.id]);
                _this.aff = new FormationFormateur();
                _this.ngOnInit();
            }, function (error) {
                console.log("erreur");
            });
        }
        this.aff.datedebut = new Date();
        this.aff.formateur = new Formateur();
    };
    AffectationFormateurFormationComponent.prototype.affecterSeance = function (id) {
        this.route.navigate(['seanceFormation', id]);
    };
    AffectationFormateurFormationComponent.prototype.edit = function (id) {
        this.route.navigate(['editFormationFormateur', id]);
    };
    AffectationFormateurFormationComponent.prototype.delete = function (f) {
        var _this = this;
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/deleteFormationFormateur/' + f.id).subscribe(function (data) {
                _this.listFormationFormateur.content.splice(_this.listFormationFormateur.content.indexOf(f), 1);
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    AffectationFormateurFormationComponent = __decorate([
        Component({
            selector: 'app-affectation-formateur-formation',
            templateUrl: './affectation-formateur-formation.component.html',
            styleUrls: ['./affectation-formateur-formation.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute, Router])
    ], AffectationFormateurFormationComponent);
    return AffectationFormateurFormationComponent;
}());
export { AffectationFormateurFormationComponent };
//# sourceMappingURL=affectation-formateur-formation.component.js.map