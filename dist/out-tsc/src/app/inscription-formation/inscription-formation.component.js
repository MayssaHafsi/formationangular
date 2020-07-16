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
import { Formation } from 'src/model/Formation';
import { InscriptionFormation } from 'src/model/InscriptionFormation';
import { Demandeur } from 'src/model/Demandeur';
var InscriptionFormationComponent = /** @class */ (function () {
    function InscriptionFormationComponent(http, ar, route) {
        this.http = http;
        this.ar = ar;
        this.route = route;
        this.insc = new InscriptionFormation();
        this.mode = 1;
        this.demandeur = new Demandeur();
        this.dem = new Demandeur();
        this.frm = new Formation();
        this.id = ar.snapshot.params.id;
    }
    InscriptionFormationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationG/' + this.id).subscribe(function (data) {
            // @ts-ignore
            //  this.insc.formation= data ;
            _this.frm = data;
            _this.insc.formationNC = _this.frm;
        }, function (error) { console.log('ereur'); });
    };
    InscriptionFormationComponent.prototype.envoyer = function () {
        this.mode = 2;
    };
    ;
    InscriptionFormationComponent.prototype.save = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(function (data) {
            console.log(data);
            _this.mode = 1;
        }, function (error) {
            console.log("erreur");
        });
    };
    InscriptionFormationComponent.prototype.inscrire = function () {
        /*  this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(dataa => {console.log(dataa);
      //this.demandeur=new Demandeur();
      
          },error =>{
          console.log("erreur");
        }) ;
        */
        this.insc.demandeur = this.demandeur;
        this.insc.dateInscription = new Date;
        this.insc.etat = "EN ATTENTE";
        this.http.post('http://localhost:8888/addInscriptionF', this.insc).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("erreur");
        });
        this.route.navigate(['tabs']);
    };
    InscriptionFormationComponent = __decorate([
        Component({
            selector: 'app-inscription-formation',
            templateUrl: './inscription-formation.component.html',
            styleUrls: ['./inscription-formation.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute, Router])
    ], InscriptionFormationComponent);
    return InscriptionFormationComponent;
}());
export { InscriptionFormationComponent };
//# sourceMappingURL=inscription-formation.component.js.map