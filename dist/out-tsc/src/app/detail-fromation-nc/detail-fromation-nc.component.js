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
import { Formation } from 'src/model/Formation';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileService } from '../upload/upload-file.service';
var DetailFromationNCComponent = /** @class */ (function () {
    function DetailFromationNCComponent(http, ar, route, uploadService) {
        this.http = http;
        this.ar = ar;
        this.route = route;
        this.uploadService = uploadService;
        this.formation = new Formation();
        this.id = ar.snapshot.params.id;
    }
    DetailFromationNCComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationG/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.formation = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/findalls/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.listes = data;
        }, function (error) { console.log('ereur'); });
        this.fileUploads = this.uploadService.getFiles(this.id);
        this.http.get('http://localhost:8888/findSeanceFormation/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.liste = data;
        }, function (error) { console.log('ereur'); });
    };
    DetailFromationNCComponent.prototype.envoyer = function () {
        this.route.navigate(['inscrireFormation', this.id]);
    };
    DetailFromationNCComponent = __decorate([
        Component({
            selector: 'app-detail-fromation-nc',
            templateUrl: './detail-fromation-nc.component.html',
            styleUrls: ['./detail-fromation-nc.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute, Router, UploadFileService])
    ], DetailFromationNCComponent);
    return DetailFromationNCComponent;
}());
export { DetailFromationNCComponent };
//# sourceMappingURL=detail-fromation-nc.component.js.map