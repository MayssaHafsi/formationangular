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
import { UploadFileCertificationService } from '../upload-file-certification.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
var FormUploadComponent = /** @class */ (function () {
    function FormUploadComponent(uploadService, ar, http) {
        this.uploadService = uploadService;
        this.ar = ar;
        this.http = http;
        this.progress = { percentage: 0 };
        this.id = ar.snapshot.params.id;
    }
    FormUploadComponent.prototype.ngOnInit = function () {
        this.fileUploads = this.uploadService.getFiles(this.id);
        console.log(this.fileUploads);
    };
    FormUploadComponent.prototype.selectFile = function (event) {
        this.selectedFiles = event.target.files;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.nom = this.currentFileUpload.name;
    };
    FormUploadComponent.prototype.upload = function () {
        var _this = this;
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.id).subscribe(function (event) {
            _this.ngOnInit();
            if (event.type === HttpEventType.UploadProgress) {
                _this.progress.percentage = Math.round(100 * event.loaded / event.total);
            }
            else if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
            }
        });
        this.nom = '';
        this.selectedFiles = undefined;
    };
    FormUploadComponent.prototype.delete = function (id) {
        var _this = this;
        console.log(id);
        var conf = window.confirm('est vous sur de suprimer ?');
        if (conf === true) {
            this.http.delete('http://localhost:8888/api/file/deleteCoursCertification/' + id).subscribe(function (data) {
                // this.fileUploads.content.splice(this.liste.content.indexOf(c), 1);
                _this.ngOnInit();
            }, function (error) {
                console.log('ereur');
            });
        }
    };
    FormUploadComponent = __decorate([
        Component({
            selector: 'app-form-upload',
            templateUrl: './form-upload.component.html',
            styleUrls: ['./form-upload.component.scss']
        }),
        __metadata("design:paramtypes", [UploadFileCertificationService, ActivatedRoute, HttpClient])
    ], FormUploadComponent);
    return FormUploadComponent;
}());
export { FormUploadComponent };
//# sourceMappingURL=form-upload.component.js.map