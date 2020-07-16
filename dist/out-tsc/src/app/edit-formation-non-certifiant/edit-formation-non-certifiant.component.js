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
import { ActivatedRoute, Router } from '@angular/router';
var EditFormationNonCertifiantComponent = /** @class */ (function () {
    function EditFormationNonCertifiantComponent(route, ar, http) {
        this.route = route;
        this.ar = ar;
        this.http = http;
        this.id = ar.snapshot.params.id;
    }
    EditFormationNonCertifiantComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationG/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.fo = data;
        }, function (error) { console.log('ereur'); });
        /* this.http.get('http://localhost:8888/domaines').subscribe(data => {
           this.listDomaine = data;
          
     
         }, error => { console.log('ereur') ; } ) ;
        
         for(var i=0;i<this.listDomaine.length;i++)
         {
           if(this.listDomaine[i]==this.fo.domaine)
           this.sel=this.listDomaine[i].id;
         }*/
    };
    EditFormationNonCertifiantComponent.prototype.update = function () {
        var _this = this;
        if (this.fo.type == 'FNC') {
            this.http.put('http://localhost:8888/updateFormationNC/' + this.fo.id, this.fo).subscribe(function (data) {
                console.log(data);
                alert('bien');
                _this.route.navigate(['formation']);
            }, function (error) { console.log('ereur'); });
        }
        else {
            this.http.put('http://localhost:8888/updateFormationC/' + this.fo.id, this.fo).subscribe(function (data) {
                console.log(data);
                alert('bien');
                _this.route.navigate(['formation']);
            }, function (error) { console.log('ereur'); });
        }
    };
    EditFormationNonCertifiantComponent = __decorate([
        Component({
            selector: 'app-edit-formation-non-certifiant',
            templateUrl: './edit-formation-non-certifiant.component.html',
            styleUrls: ['./edit-formation-non-certifiant.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], EditFormationNonCertifiantComponent);
    return EditFormationNonCertifiantComponent;
}());
export { EditFormationNonCertifiantComponent };
//# sourceMappingURL=edit-formation-non-certifiant.component.js.map