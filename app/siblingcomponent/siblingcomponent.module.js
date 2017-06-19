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
var siblingcomponent_routing_1 = require("./siblingcomponent-routing");
var childsibling_component_1 = require("./childsibling.component");
var parent_component_1 = require("./parent.component");
var child_component_1 = require("./child.component");
var forms_1 = require("@angular/forms");
var SiblingModule = (function () {
    function SiblingModule() {
    }
    return SiblingModule;
}());
SiblingModule = __decorate([
    core_1.NgModule({
        imports: [siblingcomponent_routing_1.SiblingRouteModule, platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [childsibling_component_1.ChildSiblingComponent, child_component_1.ChildComponent, parent_component_1.ParentComponent]
    })
], SiblingModule);
exports.SiblingModule = SiblingModule;
//# sourceMappingURL=siblingcomponent.module.js.map