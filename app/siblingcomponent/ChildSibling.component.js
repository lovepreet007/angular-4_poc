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
var siblingshared_service_1 = require("../services/siblingshared.service");
var ChildSiblingComponent = (function () {
    function ChildSiblingComponent(_siblingService) {
        this._siblingService = _siblingService;
        this.data = 'Testing data';
    }
    ChildSiblingComponent.prototype.addData = function () {
        this._siblingService.insertData(this.data);
        this.data = '';
    };
    return ChildSiblingComponent;
}());
ChildSiblingComponent = __decorate([
    core_1.Component({
        selector: 'child-sibling-component',
        template: "\n        <h1>I am a sibling</h1>\n        <input type=\"text\" [(ngModel)]='data'/>\n        <button (click)='addData()'>Click To Add</button>\n    "
    }),
    __metadata("design:paramtypes", [siblingshared_service_1.SiblingService])
], ChildSiblingComponent);
exports.ChildSiblingComponent = ChildSiblingComponent;
//# sourceMappingURL=childsibling.component.js.map