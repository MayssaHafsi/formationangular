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
import { InscriptionFormation } from 'src/model/InscriptionFormation';
var GestionInscriptionFormationComponent = /** @class */ (function () {
    function GestionInscriptionFormationComponent(http, route) {
        this.http = http;
        this.route = route;
        this.pag = 0;
        this.s = 3;
        this.mode = 1;
        this.mc = '';
        this.insc = new InscriptionFormation();
    }
    GestionInscriptionFormationComponent.prototype.setPage = function (p, $event) {
        event.preventDefault();
        this.pag = p;
        this.getPage();
    };
    GestionInscriptionFormationComponent.prototype.ngOnInit = function () {
        this.getPage();
    };
    GestionInscriptionFormationComponent.prototype.getPage = function () {
        var _this = this;
        //this.pag = p ;
        this.http.get('http://localhost:8888/pagerInscriptionF?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
            _this.liste = data;
            _this.pages = new Array(_this.liste.totalPages);
        }, function (error) { console.log('ereur'); });
    };
    GestionInscriptionFormationComponent.prototype.confirmer = function (c) {
        var _this = this;
        if (c.formationNC.type == "FNC") {
            var conf = window.confirm('est vous sur de confirmer cette demande ?');
            if (conf === true) {
                if (c.formationNC.nbrPlaceReserve < c.formationNC.capacite) {
                    if (c.etat == 'EN ATTENTE') {
                        c.etat = "CONFIRME";
                        this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                            console.log(data);
                            alert('bien');
                            _this.ngOnInit();
                        }, function (error) { console.log('ereur'); });
                        c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve + 1;
                        this.http.put('http://localhost:8888/updateFormationNC/' + c.formationNC.id, c.formationNC).subscribe(function (data) {
                            console.log(data);
                        }, function (error) { console.log('ereur'); });
                        this.to = c.demandeur.email;
                        this.text = 'tu es accepté pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                        this.objet = 'Reponse sur formation';
                        this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                            console.log(data);
                        }, function (error) { console.log('ereur'); });
                    }
                    else if (c.etat == 'REFUSE') {
                        c.etat = "CONFIRME";
                        this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                            console.log(data);
                            alert('bien');
                            _this.ngOnInit();
                        }, function (error) { console.log('ereur'); });
                        c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve + 1;
                        this.http.put('http://localhost:8888/updateFormationNC/' + c.formationNC.id, c.formationNC).subscribe(function (data) {
                            console.log(data);
                        }, function (error) { console.log('ereur'); });
                        this.to = c.demandeur.email;
                        this.text = 'tu es accepté pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                        this.objet = 'Modification pour la Reponse sur formation';
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
        }
        else {
            var conf = window.confirm('est vous sur de confirmer cette demande FC ?');
            if (conf === true) {
                if (c.formationNC.nbrPlaceReserve < c.formationNC.capacite) {
                    if (c.etat == 'EN ATTENTE') {
                        c.etat = "CONFIRME";
                        this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                            console.log(data);
                            alert('bien');
                            _this.ngOnInit();
                        }, function (error) { console.log('ereur'); });
                        c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve + 1;
                        this.http.put('http://localhost:8888/updateFormationC/' + c.formationNC.id, c.formationNC).subscribe(function (data) {
                            console.log(data);
                        }, function (error) { console.log('ereur'); });
                        this.to = c.demandeur.email;
                        this.text = 'tu es accepté pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                        this.objet = 'Reponse sur formation';
                        this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                            console.log(data);
                        }, function (error) { console.log('ereur'); });
                    }
                    else if (c.etat == 'REFUSE') {
                        c.etat = "CONFIRME";
                        this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                            console.log(data);
                            alert('bien');
                            _this.ngOnInit();
                        }, function (error) { console.log('ereur'); });
                        c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve + 1;
                        this.http.put('http://localhost:8888/updateFormationC/' + c.formationNC.id, c.formationNC).subscribe(function (data) {
                            console.log(data);
                        }, function (error) { console.log('ereur'); });
                        this.to = c.demandeur.email;
                        this.text = 'tu es accepté pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                        this.objet = 'Modification pour la Reponse sur formation';
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
        }
    };
    GestionInscriptionFormationComponent.prototype.refuser = function (c) {
        var _this = this;
        if (c.formationNC.type == "FNC") {
            var conf = window.confirm('est vous sur de refuser cette demande ?');
            if (conf === true) {
                if (c.etat == 'EN ATTENTE') {
                    c.etat = "REFUSE";
                    //  c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve+1 ;
                    this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                        console.log(data);
                        alert('bien');
                        _this.ngOnInit();
                    }, function (error) { console.log('ereur'); });
                    this.to = c.demandeur.email;
                    this.text = 'tu es refusé pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                    this.objet = 'Reponse sur formation';
                    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                }
                else if (c.etat == 'CONFIRME') {
                    //alert('hhh')
                    c.etat = "REFUSE";
                    this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                        console.log(data);
                        alert('bien');
                        _this.ngOnInit();
                    }, function (error) { console.log('ereur'); });
                    c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve - 1;
                    this.http.put('http://localhost:8888/updateFormationNC/' + c.formationNC.id, c.formationNC).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                    this.to = c.demandeur.email;
                    this.text = 'tu es refusé pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                    this.objet = ' Modification pour la Reponse sur formation';
                    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                }
            }
        }
        else {
            var conf = window.confirm('est vous sur de refuser cette demande de FC ?');
            if (conf === true) {
                if (c.etat == 'EN ATTENTE') {
                    c.etat = "REFUSE";
                    //  c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve+1 ;
                    this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                        console.log(data);
                        alert('bien');
                        _this.ngOnInit();
                    }, function (error) { console.log('ereur'); });
                    this.to = c.demandeur.email;
                    this.text = 'tu es refusé pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                    this.objet = 'Reponse sur formation';
                    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                }
                else if (c.etat == 'CONFIRME') {
                    //alert('hhh')
                    c.etat = "REFUSE";
                    this.http.put('http://localhost:8888/updateInscriptionFormation/' + c.id, c).subscribe(function (data) {
                        console.log(data);
                        alert('bien');
                        _this.ngOnInit();
                    }, function (error) { console.log('ereur'); });
                    c.formationNC.nbrPlaceReserve = c.formationNC.nbrPlaceReserve - 1;
                    this.http.put('http://localhost:8888/updateFormationC/' + c.formationNC.id, c.formationNC).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                    this.to = c.demandeur.email;
                    this.text = 'tu es refusé pour la formation ' + c.formationNC.nom + ' de ' + c.formationNC.datedebut + ' a ' + c.formationNC.datefin;
                    this.objet = ' Modification pour la Reponse sur formation';
                    this.http.get('http://localhost:8888/envoiMail?to=' + this.to + '&text=' + this.text + '&objet=' + this.objet).subscribe(function (data) {
                        console.log(data);
                    }, function (error) { console.log('ereur'); });
                }
            }
        }
    };
    GestionInscriptionFormationComponent.prototype.envoyer = function (c) {
        var _this = this;
        this.http.get('http://localhost:8888/findDemandeurParCin/' + c.demandeur.cin).subscribe(function (data) {
            _this.demandeur = data;
            _this.mode = 2;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/findDemandeurInscription/' + c.demandeur.cin).subscribe(function (data) {
            _this.lst = data;
            _this.mode = 2;
        }, function (error) { console.log('ereur'); });
    };
    GestionInscriptionFormationComponent.prototype.chercher = function () {
        var _this = this;
        if (this.mc == 'ic') {
            this.http.get('http://localhost:8888/pagerInscriptionFC?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
        else if (this.mc == 'ir') {
            this.http.get('http://localhost:8888/pagerInscriptionFR?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
        else if (this.mc == 'ia') {
            this.http.get('http://localhost:8888/pagerInscriptionF?page=' + this.pag + '&size=' + this.s).subscribe(function (data) {
                _this.liste = data;
                _this.pages = new Array(_this.liste.totalPages);
            }, function (error) { console.log('ereur'); });
        }
    };
    GestionInscriptionFormationComponent = __decorate([
        Component({
            selector: 'app-gestion-inscription-formation',
            templateUrl: './gestion-inscription-formation.component.html',
            styleUrls: ['./gestion-inscription-formation.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router])
    ], GestionInscriptionFormationComponent);
    return GestionInscriptionFormationComponent;
}());
export { GestionInscriptionFormationComponent };
//# sourceMappingURL=gestion-inscription-formation.component.js.map