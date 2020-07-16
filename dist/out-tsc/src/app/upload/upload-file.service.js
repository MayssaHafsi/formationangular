var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
var UploadFileService = /** @class */ (function () {
    function UploadFileService(http, ar) {
        this.http = http;
        this.ar = ar;
        this.id = ar.snapshot.params.id;
    }
    UploadFileService.prototype.pushFileToStorage = function (file, id) {
        var formdata = new FormData();
        formdata.append('file', file);
        //formdata.append('cours',cours)
        var req = new HttpRequest('POST', 'http://localhost:8888/api/file/upload/' + id, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    };
    UploadFileService.prototype.getFiles = function (id) {
        return this.http.get('http://localhost:8888/api/file/tous/' + id);
    };
    UploadFileService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute])
    ], UploadFileService);
    return UploadFileService;
}());
export { UploadFileService };
//# sourceMappingURL=upload-file.service.js.map