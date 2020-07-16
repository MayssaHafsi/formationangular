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
import { InscriptionCertification } from 'src/model/InscriptionCertification';
import { Certification } from 'src/model/Certification';
import { Demandeur } from 'src/model/Demandeur';
var InscriptionCertificationComponent = /** @class */ (function () {
    function InscriptionCertificationComponent(http, ar, route) {
        this.http = http;
        this.ar = ar;
        this.route = route;
        this.insc = new InscriptionCertification();
        this.mode = 1;
        this.demandeur = new Demandeur();
        this.cer = new Certification();
        this.id = ar.snapshot.params.id;
    }
    InscriptionCertificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherCertification/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.cer = data;
            _this.insc.certification = _this.cer;
            console.log(_this.cer);
        }, function (error) { console.log('ereur'); });
    };
    InscriptionCertificationComponent.prototype.inscrire = function () {
        /* this.http.post('http://localhost:8888/addDemandeur', this.demandeur).subscribe(dataa => {console.log(dataa);
         //this.demandeur=new Demandeur();
         
             },error =>{
             console.log("erreur");
           }) ;*/
        //  this.insc.demandeurCertification=this.demandeur ; 
        this.insc.dateInscription = new Date;
        this.insc.etat = "EN ATTENTE";
        this.insc.demandeurCertification = this.demandeur;
        this.http.post('http://localhost:8888/addInscri', this.insc).subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log("erreur");
        });
        this.route.navigate(['tabsCertification']);
    };
    InscriptionCertificationComponent = __decorate([
        Component({
            selector: 'app-inscription-certification',
            templateUrl: './inscription-certification.component.html',
            styleUrls: ['./inscription-certification.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute, Router])
    ], InscriptionCertificationComponent);
    return InscriptionCertificationComponent;
}());
export { InscriptionCertificationComponent };
//# sourceMappingURL=inscription-certification.component.js.map