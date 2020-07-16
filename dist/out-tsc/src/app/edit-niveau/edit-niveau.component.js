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
var EditNiveauComponent = /** @class */ (function () {
    function EditNiveauComponent(route, ar, http) {
        this.route = route;
        this.ar = ar;
        this.http = http;
        this.id = ar.snapshot.params.id;
    }
    EditNiveauComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherNiveau/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.niveau = data;
        }, function (error) { console.log('ereur'); });
    };
    EditNiveauComponent.prototype.edit = function () {
        var _this = this;
        this.http.put('http://localhost:8888/updateNiveau/' + this.niveau.id, this.niveau).subscribe(function (data) {
            console.log(data);
            alert('bien');
            _this.route.navigate(['gestionNiveau', _this.niveau.themeNiveau.id]);
        }, function (error) { console.log('ereur'); });
    };
    EditNiveauComponent = __decorate([
        Component({
            selector: 'app-edit-niveau',
            templateUrl: './edit-niveau.component.html',
            styleUrls: ['./edit-niveau.component.scss']
        }),
        __metadata("design:paramtypes", [Router, ActivatedRoute, HttpClient])
    ], EditNiveauComponent);
    return EditNiveauComponent;
}());
export { EditNiveauComponent };
//# sourceMappingURL=edit-niveau.component.js.map