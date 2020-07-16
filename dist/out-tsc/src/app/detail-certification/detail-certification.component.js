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
import { Router, ActivatedRoute } from '@angular/router';
import { UploadFileCertificationService } from '../uploadcertification/upload-file-certification.service';
var DetailCertificationComponent = /** @class */ (function () {
    function DetailCertificationComponent(http, route, ar, uploadService) {
        this.http = http;
        this.route = route;
        this.ar = ar;
        this.uploadService = uploadService;
        this.id = ar.snapshot.params.id;
    }
    DetailCertificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherCertification/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.certification = data;
            console.log(_this.certification);
        }, function (error) { console.log('ereur'); });
        this.fileUploads = this.uploadService.getFiles(this.id);
        this.http.get('http://localhost:8888/findParCertificationConfirme/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.listeInscrits = data;
        }, function (error) { console.log('ereur'); });
    };
    DetailCertificationComponent.prototype.printInscrit = function () {
        this.route.navigate(['printInscritCer', this.id]);
    };
    DetailCertificationComponent = __decorate([
        Component({
            selector: 'app-detail-certification',
            templateUrl: './detail-certification.component.html',
            styleUrls: ['./detail-certification.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, Router, ActivatedRoute, UploadFileCertificationService])
    ], DetailCertificationComponent);
    return DetailCertificationComponent;
}());
export { DetailCertificationComponent };
//# sourceMappingURL=detail-certification.component.js.map