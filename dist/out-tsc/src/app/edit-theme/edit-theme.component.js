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
var EditThemeComponent = /** @class */ (function () {
    function EditThemeComponent(route, http, ar) {
        this.route = route;
        this.http = http;
        this.ar = ar;
        this.id = ar.snapshot.params.id;
    }
    EditThemeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('http://localhost:8888/chercherTheme/' + this.id).subscribe(function (data) {
            // @ts-ignore
            _this.theme = data;
        }, function (error) { console.log('ereur'); });
    };
    EditThemeComponent.prototype.edit = function () {
        var _this = this;
        this.http.put('http://localhost:8888/updateTheme/' + this.theme.id, this.theme).subscribe(function (data) {
            console.log(data);
            alert('bien');
            _this.route.navigate(['gestionTheme']);
        }, function (error) { console.log('ereur'); });
    };
    EditThemeComponent = __decorate([
        Component({
            selector: 'app-edit-theme',
            templateUrl: './edit-theme.component.html',
            styleUrls: ['./edit-theme.component.scss']
        }),
        __metadata("design:paramtypes", [Router, HttpClient, ActivatedRoute])
    ], EditThemeComponent);
    return EditThemeComponent;
}());
export { EditThemeComponent };
//# sourceMappingURL=edit-theme.component.js.map