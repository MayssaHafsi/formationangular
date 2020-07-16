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
import { Certification } from 'src/model/Certification';
import { HttpClient } from '@angular/common/http';
import { Theme } from 'src/model/Theme';
import { Router } from '@angular/router';
import { Domaine } from 'src/model/Domaine';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
var NewCertificationComponent = /** @class */ (function () {
    function NewCertificationComponent(modalService, http, route) {
        this.modalService = modalService;
        this.http = http;
        this.route = route;
        this.mode = 1;
        this.domaine = new Domaine();
        this.theme = new Theme();
        this.certification = new Certification();
    }
    NewCertificationComponent.prototype.open = function (contents) {
        var _this = this;
        this.modalService.open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewCertificationComponent.prototype.opens = function (contents) {
        var _this = this;
        this.modalService.open(contents, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NewCertificationComponent.prototype.getDismissReason = function (reason) {
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
    NewCertificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/domaines').subscribe(function (data) {
            _this.listDomaine = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/themes').subscribe(function (data) {
            _this.listTheme = data;
        }, function (error) { console.log('ereur'); });
    };
    NewCertificationComponent.prototype.selected = function (event) {
        var _this = this;
        this.http.get('http://localhost:8888/chercherThemeNiveau?id=' + this.them.id).subscribe(function (data) {
            _this.listNiveau = data;
        }, function (error) { console.log('ereur'); });
    };
    NewCertificationComponent.prototype.save = function () {
        var _this = this;
        this.http.post('http://localhost:8888/addCertification', this.certification).subscribe(function (data) {
            console.log(data);
            _this.route.navigate(['/gestionCertification']);
        }, function (error) {
            console.log("erreur");
        });
    };
    NewCertificationComponent.prototype.saveDomaine = function () {
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
    NewCertificationComponent.prototype.saveTheme = function () {
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
    NewCertificationComponent.prototype.retour = function () {
        this.mode = 1;
        this.ngOnInit();
    };
    NewCertificationComponent = __decorate([
        Component({
            selector: 'app-new-certification',
            templateUrl: './new-certification.component.html',
            styleUrls: ['./new-certification.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal, HttpClient, Router])
    ], NewCertificationComponent);
    return NewCertificationComponent;
}());
export { NewCertificationComponent };
//# sourceMappingURL=new-certification.component.js.map