var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/model/Formation';
import { UploadFileService } from '../upload/upload-file.service';
var DetailformationComponent = /** @class */ (function () {
    function DetailformationComponent(http, ar, route, uploadService) {
        this.http = http;
        this.ar = ar;
        this.route = route;
        this.uploadService = uploadService;
        this.formation = new Formation();
        this.modr = 1;
        this.id = ar.snapshot.params.id;
    }
    DetailformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationG/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.formation = data;
            console.log(_this.formation);
        }, function (error) { console.log('ereur'); });
        this.fileUploads = this.uploadService.getFiles(this.id);
        this.http.get('http://localhost:8888/findalls/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.listes = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/findSeanceFormation/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.liste = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/findParFormationsConfirme/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.listeInscrits = data;
        }, function (error) { console.log('ereur'); });
    };
    DetailformationComponent.prototype.printInscrit = function () {
        /*   let doc=new jsPDF();
           let specialElementHandlers={
             '#editor': function(element,renderrer){
               return true ;
             }
           } ;
           let content=this.content.nativeElement ;
           doc.fromHTML(content.innerHTML,15,15,{
       'width' :190 ,
       elementHandlers:specialElementHandlers
       
       
           });
       
           doc.save('test.pdf');*/
        this.route.navigate(['printInscritFNC', this.id]);
    };
    DetailformationComponent.prototype.envoyerAttestation = function (id) {
        this.route.navigate(['attestationFormation', id]);
    };
    __decorate([
        ViewChild('content'),
        __metadata("design:type", ElementRef)
    ], DetailformationComponent.prototype, "content", void 0);
    DetailformationComponent = __decorate([
        Component({
            selector: 'app-detailformation',
            templateUrl: './detailformation.component.html',
            styleUrls: ['./detailformation.component.scss']
        }),
        __metadata("design:paramtypes", [HttpClient, ActivatedRoute, Router, UploadFileService])
    ], DetailformationComponent);
    return DetailformationComponent;
}());
export { DetailformationComponent };
//# sourceMappingURL=detailformation.component.js.map