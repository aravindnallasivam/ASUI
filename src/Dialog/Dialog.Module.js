"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Model_Module_1 = require("./Model/Model.Module");
var ConfirmDialog_Module_1 = require("./ConfirmDialog/ConfirmDialog.Module");
var Draggable_module_1 = require("./../Draggable/Draggable.module");
var DialogModule = (function () {
    function DialogModule() {
    }
    return DialogModule;
}());
DialogModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, ConfirmDialog_Module_1.ConfirmDialogModule, Model_Module_1.ModelModule, Draggable_module_1.DraggableModule],
        exports: [ConfirmDialog_Module_1.ConfirmDialogModule, Model_Module_1.ModelModule]
    })
], DialogModule);
exports.DialogModule = DialogModule;
//# sourceMappingURL=Dialog.Module.js.map