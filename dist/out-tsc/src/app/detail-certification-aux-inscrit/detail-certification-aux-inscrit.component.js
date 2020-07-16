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
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Certification } from 'src/model/Certification';
import { UploadFileCertificationService } from '../uploadcertification/upload-file-certification.service';
var DetailCertificationAuxInscritComponent = /** @class */ (function () {
    function DetailCertificationAuxInscritComponent(route, ar, http, uploadService) {
        this.route = route;
        this.ar = ar;
        this.http = http;
        this.uploadService = uploadService;
        this.cer = new Certification();
        this.id = ar.snapshot.params.id;
    }
    DetailCertificationAuxInscritComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherCertification/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.cer = data;
        }, function (error) { console.log('ereur'); });
        this.fileUploads = this.uploadService.getFiles(this.id);
    };
    DetailCertificationAuxInscritComponent.prototype.envoyer = function () {
        this.route.navigate(['inscrireCertification', this.id]);
    };
    DetailCertificationAuxInscritComponent = __decorate([
        Component({
            selector: 'app-detail-certification-aux-inscrit',
            templateUrl: './detail-certification-aux-inscrit.component.html',
            styleUrls: ['./detail-certification-aux-inscrit.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient, UploadFileCertificationService])
    ], DetailCertificationAuxInscritComponent);
    return DetailCertificationAuxInscritComponent;
}());
export { DetailCertificationAuxInscritComponent };
//# sourceMappingURL=detail-certification-aux-inscrit.component.js.map