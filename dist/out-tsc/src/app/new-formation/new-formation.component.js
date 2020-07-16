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
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { FormationCertifiant } from 'src/model/FormationCertifiant';
import { Domaine } from 'src/model/Domaine';
import { Theme } from 'src/model/Theme';
import { Certification } from 'src/model/Certification';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var NewFormationComponent = /** @class */ (function () {
    function NewFormationComponent(modalService, http, route) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.fo = new FormationCertifiant();
        this.mode = 1;
        this.domaine = new Domaine();
        this.theme = new Theme();
        this.certification = new Certification();
    }
    NewFormationComponent.prototype.open = function (contents) {
        var _this = this;
        this.modalService.open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewFormationComponent.prototype.opens = function (contents) {
        var _this = this;
        this.modalService.open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewFormationComponent.prototype.opense = function (contentse) {
        var _this = this;
        this.modalService.open(contentse, { size: "lg", ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewFormationComponent.prototype.getDismissReason = function (reason) {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NewFormationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/domaines').subscribe(function (data) {
            _this.listDomaine = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/certifs').subscribe(function (data) {
            _this.listCerFor = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/themes').subscribe(function (data) {
            _this.listTheme = data;
        }, function (error) { console.log('ereur'); });
    };
    NewFormationComponent.prototype.save = function () {
        var _this = this;
        this.fo.type = "FC";
        this.http.post('http://localhost:8888/addFormationC', this.fo).subscribe(function (data) {
            console.log(data);
            _this.route.navigate(['/formation']);
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormationComponent.prototype.selected = function (event) {
        var _this = this;
        this.http.get('http://localhost:8888/chercherThemeCert?id=' + this.fo.theme.id).subscribe(function (data) {
            _this.listThemeCert = data;
        }, function (error) { console.log('ereur'); });
    };
    NewFormationComponent.prototype.saveDomaine = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addDomaine', this.domaine).subscribe(function (data) {
            console.log(data);
            _this.modalService.dismissAll();
            _this.domaine.nom = '';
            _this.ngOnInit();
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormationComponent.prototype.saveTheme = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addTheme', this.theme).subscribe(function (data) {
            console.log(data);
            _this.modalService.dismissAll();
            _this.theme.nom = '';
            _this.ngOnInit();
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormationComponent.prototype.saveCertification = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addCertification', this.certification).subscribe(function (data) {
            console.log(data);
            _this.modalService.dismissAll();
            _this.ngOnInit();
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormationComponent.prototype.retour = function () {
        this.mode = 1;
        this.ngOnInit();
    };
    NewFormationComponent.prototype.selecteds = function (event) {
        var _this = this;
        this.http.get('http://localhost:8888/chercherThemeNiveau?id=' + this.them.id).subscribe(function (data) {
            _this.listNiveau = data;
        }, function (error) { console.log('ereur'); });
    };
    NewFormationComponent = __decorate([
        Component({
            selector: 'app-new-formation',
            templateUrl: './new-formation.component.html',
            styleUrls: ['./new-formation.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal, HttpClient, Router])
    ], NewFormationComponent);
    return NewFormationComponent;
}());
export { NewFormationComponent };
//# sourceMappingURL=new-formation.component.js.map