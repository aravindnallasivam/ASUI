"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Dialog_1 = require("ASUI/Dialog");
var Dialog_2 = require("ASUI/Dialog");
var DgComponent = DgComponent_1 = (function () {
    function DgComponent(modelService) {
        this.modelService = modelService;
        this.Content = "Some text in the Modal..";
    }
    DgComponent.prototype.openPopup = function () {
        this.modelService.CreateDialog(DgComponent_1);
    };
    return DgComponent;
}());
DgComponent = DgComponent_1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'dg.compontent.html'
    }),
    Dialog_1.ModelDialog({
        Title: "The Message",
        Height: 500,
        Width: 500,
        EnableClose: false
    }),
    __metadata("design:paramtypes", [Dialog_2.ModelService])
], DgComponent);
exports.DgComponent = DgComponent;
var DgComponent_1;
//# sourceMappingURL=dg.compontent.js.map