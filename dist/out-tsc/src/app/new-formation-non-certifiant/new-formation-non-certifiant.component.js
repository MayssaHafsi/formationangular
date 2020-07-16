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
import { FormationNonCertifiant } from 'src/model/FormationNonCertifiant';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Domaine } from 'src/model/Domaine';
import { Theme } from 'src/model/Theme';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var NewFormationNonCertifiantComponent = /** @class */ (function () {
    function NewFormationNonCertifiantComponent(modalService, http, route) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.fo = new FormationNonCertifiant();
        this.mode = 1;
        this.domaine = new Domaine();
        this.theme = new Theme();
        this.modalRef = null;
    }
    NewFormationNonCertifiantComponent.prototype.open = function (contents) {
        var _this = this;
        this.modalRef = this.modalService.open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewFormationNonCertifiantComponent.prototype.opens = function (contents) {
        var _this = this;
        this.modalRef = this.modalService.open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewFormationNonCertifiantComponent.prototype.getDismissReason = function (reason) {
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
    NewFormationNonCertifiantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/domaines').subscribe(function (data) {
            _this.listDomaine = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/themes').subscribe(function (data) {
            _this.listTheme = data;
        }, function (error) { console.log('ereur'); });
    };
    NewFormationNonCertifiantComponent.prototype.save = function () {
        var _this = this;
        this.fo.type = "FNC";
        this.http.post('http://localhost:8888/addFormationNC', this.fo).subscribe(function (data) {
            console.log(data);
            _this.route.navigate(['/formation']);
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormationNonCertifiantComponent.prototype.saveDomaine = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addDomaine', this.domaine).subscribe(function (data) {
            console.log(data);
            _this.modalService.dismissAll();
            _this.ngOnInit();
            _this.domaine.nom = '';
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormationNonCertifiantComponent.prototype.saveTheme = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addTheme', this.theme).subscribe(function (data) {
            console.log(data);
            _this.modalService.dismissAll();
            _this.ngOnInit();
            _this.theme.nom = '';
        }, function (error) {
            console.log("erreur");
        });
    };
    NewFormationNonCertifiantComponent.prototype.retour = function () {
        this.mode = 1;
        this.ngOnInit();
    };
    NewFormationNonCertifiantComponent = __decorate([
        Component({
            selector: 'app-new-formation-non-certifiant',
            templateUrl: './new-formation-non-certifiant.component.html',
            styleUrls: ['./new-formation-non-certifiant.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal, HttpClient, Router])
    ], NewFormationNonCertifiantComponent);
    return NewFormationNonCertifiantComponent;
}());
export { NewFormationNonCertifiantComponent };
//# sourceMappingURL=new-formation-non-certifiant.component.js.map