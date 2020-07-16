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
import { ActivatedRoute, Router } from '@angular/router';
import { SeanceFormation } from 'src/model/SeanceFormation';
var SeanceFormationComponent = /** @class */ (function () {
    function SeanceFormationComponent(http, route, ar) {
        this.http = http;
        this.route = route;
        this.ar = ar;
        this.ff = new SeanceFormation();
        this.id = ar.snapshot.params.id;
    }
    SeanceFormationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationFormateur/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.ff.formationFormateur = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/findSeanceFormateur/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.listes = data;
        }, function (error) { console.log('ereur'); });
    };
    SeanceFormationComponent.prototype.affecter = function () {
        var _this = this;
        if (this.ff.datejour < this.ff.formationFormateur.datedebut || this.ff.datejour > this.ff.formationFormateur.datefin) {
            alert("verifier la date de seance de formation en fonction de date  debutet fin de formation !! ");
        }
        else {
            this.http.post('http://localhost:8888/addSeance', this.ff).subscribe(function (data) {
                _this.route.navigate(['/seanceFormation/' + _this.id]);
                _this.ff = new SeanceFormation();
                _this.ngOnInit();
            }, function (error) {
                console.log("erreur");
            });
        }
    };
    SeanceFormationComponent.prototype.edit = function (id) {
        this.route.navigate(['editSeanceFormation', id]);
    };
    SeanceFormationComponent.prototype.delete = function (s) {
        var _this = this;
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/deleteSeanceFormation/' + s.id).subscribe(function (data) {
                _this.ngOnInit();
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    SeanceFormationComponent = __decorate([
        Component({
            selector: 'app-seance-formation',
            templateUrl: './seance-formation.component.html',
            styleUrls: ['./seance-formation.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router, ActivatedRoute])
    ], SeanceFormationComponent);
    return SeanceFormationComponent;
}());
export { SeanceFormationComponent };
//# sourceMappingURL=seance-formation.component.js.map