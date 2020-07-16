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
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Formation } from 'src/model/Formation';
import * as jsPDF from 'jspdf';
var PrintInscritFormationComponent = /** @class */ (function () {
    function PrintInscritFormationComponent(route, ar, http) {
        this.route = route;
        this.ar = ar;
        this.http = http;
        this.formation = new Formation();
        this.id = ar.snapshot.params.id;
    }
    PrintInscritFormationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherFormationG/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.formation = data;
        }, function (error) { console.log('ereur'); });
        this.http.get('http://localhost:8888/findParFormationsConfirme/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.listeInscrits = data;
        }, function (error) { console.log('ereur'); });
    };
    PrintInscritFormationComponent.prototype.printInscrit = function () {
        var doc = new jsPDF();
        var specialElementHandlers = {
            '#editor': function (element, renderrer) {
                return true;
            }
        };
        var content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 15, 15, {
            'width': 190,
            elementHandlers: specialElementHandlers
        });
        doc.save('test.pdf');
    };
    __decorate([
        ViewChild('content'),
        __metadata("design:type", ElementRef)
    ], PrintInscritFormationComponent.prototype, "content", void 0);
    PrintInscritFormationComponent = __decorate([
        Component({
            selector: 'app-print-inscrit-formation',
            templateUrl: './print-inscrit-formation.component.html',
            styleUrls: ['./print-inscrit-formation.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], PrintInscritFormationComponent);
    return PrintInscritFormationComponent;
}());
export { PrintInscritFormationComponent };
//# sourceMappingURL=print-inscrit-formation.component.js.map