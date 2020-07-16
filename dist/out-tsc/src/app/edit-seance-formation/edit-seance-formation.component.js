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
var EditSeanceFormationComponent = /** @class */ (function () {
    function EditSeanceFormationComponent(route, ar, http) {
        this.route = route;
        this.ar = ar;
        this.http = http;
        this.id = ar.snapshot.params.id;
    }
    EditSeanceFormationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherSeance/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.ff = data;
        }, function (error) { console.log('ereur'); });
    };
    EditSeanceFormationComponent.prototype.update = function () {
        var _this = this;
        this.http.put('http://localhost:8888/updateSeanceFormation/' + this.ff.id, this.ff).subscribe(function (data) {
            console.log(data);
            alert('bien');
            _this.route.navigate(['seanceFormation', _this.ff.formationFormateur.id]);
        }, function (error) { console.log('ereur'); });
    };
    EditSeanceFormationComponent = __decorate([
        Component({
            selector: 'app-edit-seance-formation',
            templateUrl: './edit-seance-formation.component.html',
            styleUrls: ['./edit-seance-formation.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], EditSeanceFormationComponent);
    return EditSeanceFormationComponent;
}());
export { EditSeanceFormationComponent };
//# sourceMappingURL=edit-seance-formation.component.js.map