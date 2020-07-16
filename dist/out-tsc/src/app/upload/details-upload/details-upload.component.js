var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var DetailsUploadComponent = /** @class */ (function () {
    function DetailsUploadComponent() {
    }
    DetailsUploadComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], DetailsUploadComponent.prototype, "fileUpload", void 0);
    DetailsUploadComponent = __decorate([
        Component({
            selector: 'app-details-upload',
            templateUrl: './details-upload.component.html',
            styleUrls: ['./details-upload.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DetailsUploadComponent);
    return DetailsUploadComponent;
}());
export { DetailsUploadComponent };
//# sourceMappingURL=details-upload.component.js.map