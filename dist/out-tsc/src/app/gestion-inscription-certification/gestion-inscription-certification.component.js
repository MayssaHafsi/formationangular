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
import { InscriptionCertification } from 'src/model/InscriptionCertification';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
var GestionInscriptionCertificationComponent = /** @class */ (function () {
    function GestionInscriptionCertificationComponent(http, route) {
        this.http = http;
        this.route = route;
        this.pag = 0;
        this.s = 3;
        this.mode = 1;
        this.mc = '';
        this.insc = new InscriptionCertification();
    }
    GestionInscriptionCertificationComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    GestionInscriptionCertificationComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    GestionInscriptionCertificationComponent.prototype.getPage = function () {
        var _this = this;
        this.http.get('http://localhost:8888/pagerInscriptionC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionInscriptionCertificationComponent.prototype.confirmer = function (c) {
        var _this = this;
        var conf = window.confirm('est vous sur de confirmer cette demande ?');
        if (conf === true) {
            if (c.certification.nbrPlaceReserve < c.certification.capacite) {
                if (c.etat == 'EN ATTENTE') {
                    c.etat = "CONFIRME";
                    this.http.put('http://localhost:8888/updateInscCertification/' + c.id, c).subscribe(function (data) {
                        console.log(data);
                        alert('bien');
                        _this.ngOnInit();
                    }, function (error) { console.log('ereur'); });
                    c.certification.nbrPlaceReserve = c.certification.nbrPlaceReserve + 1;
                    this.http.put('http://localhost:8888/updateCertification/' + c.certification.id, c.certification).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                    this.to = c.demandeurCertification.email;
                    this.text = 'tu es accepté pour la certification ' + c.certification.titre + ' session ' + c.certification.dateCertification + ' a ' + c.certification.timeCertification;
                    this.objet = 'Reponse sur formation';
                    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                }
                else if (c.etat == 'REFUSE') {
                    c.etat = "CONFIRME";
                    this.http.put('http://localhost:8888/updateInscCertification/' + c.id, c).subscribe(function (data) {
                        console.log(data);
                        alert('bien');
                        _this.ngOnInit();
                    }, function (error) { console.log('ereur'); });
                    c.certification.nbrPlaceReserve = c.certification.nbrPlaceReserve + 1;
                    this.http.put('http://localhost:8888/updateCertification/' + c.certification.id, c.certification).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                    this.to = c.demandeurCertification.email;
                    this.text = 'tu es accepté pour la certification ' + c.certification.titre + ' session ' + c.certification.dateCertification + ' a ' + c.certification.timeCertification;
                    this.objet = 'Modification pour la Reponse sur certification';
                    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                }
            }
            else {
                alert('tous les places sont reservé !!!');
                // this.liste.content.splice(this.liste.content.indexOf(c), 1);
            }
        }
    };
    GestionInscriptionCertificationComponent.prototype.refuser = function (c) {
        var _this = this;
        var conf = window.confirm('est vous sur de refuser cette demande ?');
        if (conf === true) {
            if (c.etat == 'EN ATTENTE') {
                c.etat = "REFUSE";
                //  c.certification.nbrPlaceReserve = c.certification.nbrPlaceReserve+1 ;
                this.http.put('http://localhost:8888/updateInscCertification/' + c.id, c).subscribe(function (data) {
                    console.log(data);
                    alert('bien');
                    _this.ngOnInit();
                }, function (error) { console.log('ereur'); });
                this.to = c.demandeurCertification.email;
                this.text = 'tu es refusé pour la certification ' + c.certification.titre + ' session ' + c.certification.dateCertification + ' a ' + c.certification.timeCertification;
                this.objet = 'Reponse sur certification';
                this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                    console.log(data);
                }, function (error) { console.log('ereur'); });
            }
            else if (c.etat == 'CONFIRME') {
                c.etat = "REFUSE";
                this.http.put('http://localhost:8888/updateInscCertification/' + c.id, c).subscribe(function (data) {
                    console.log(data);
                    alert('bien');
                    _this.ngOnInit();
                }, function (error) { console.log('ereur'); });
                c.certification.nbrPlaceReserve = c.certification.nbrPlaceReserve - 1;
                this.http.put('http://localhost:8888/updateCertification/' + c.certification.id, c.certification).subscribe(function (data) {
                    console.log(data);
                }, function (error) { console.log('ereur'); });
                this.to = c.demandeurCertification.email;
                this.text = 'tu es accepté pour la certification ' + c.certification.titre + ' session ' + c.certification.dateCertification + ' a ' + c.certification.timeCertification;
                this.objet = 'Modification pour la Reponse sur certification';
                this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                    console.log(data);
                }, function (error) { console.log('ereur'); });
            }
        }
    };
    GestionInscriptionCertificationComponent.prototype.envoyer = function (c) {
        var _this = this;
        this.http.get('http://localhost:8888/findDemandeurParCin/' + c.demandeurCertification.cin).subscribe(function (data) {
            _this.dem = data;
            _this.mode = 2;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/findDemandeurInscription/' + c.demandeurCertification.cin).subscribe(function (data) {
            _this.lst = data;
            _this.mode = 2;
        }, function (error) { console.log('ereur'); });
    };
    GestionInscriptionCertificationComponent.prototype.chercher = function () {
        var _this = this;
        if (this.mc == 'ic') {
            this.http.get('http://localhost:8888/pagerInscriptionCC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
        else if (this.mc == 'ir') {
            this.http.get('http://localhost:8888/pagerInscriptionCR?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
        else if (this.mc == 'ia') {
            this.http.get('http://localhost:8888/pagerInscriptionC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
    };
    GestionInscriptionCertificationComponent = __decorate([
        Component({
            selector: 'app-gestion-inscription-certification',
            templateUrl: './gestion-inscription-certification.component.html',
            styleUrls: ['./gestion-inscription-certification.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], GestionInscriptionCertificationComponent);
    return GestionInscriptionCertificationComponent;
}());
export { GestionInscriptionCertificationComponent };
//# sourceMappingURL=gestion-inscription-certification.component.js.map