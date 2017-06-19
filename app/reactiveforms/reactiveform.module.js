"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var reactiveform_component_1 = require("./reactiveform.component");
var reactiveform_routing_module_1 = require("./reactiveform-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var ReactiveFormModule = (function () {
    function ReactiveFormModule() {
    }
    return ReactiveFormModule;
}());
ReactiveFormModule = __decorate([
    core_1.NgModule({
        declarations: [reactiveform_component_1.ReactiveFormComponent],
        imports: [platform_browser_1.BrowserModule, reactiveform_routing_module_1.ReactiveFormRouteModule, forms_1.ReactiveFormsModule]
    })
], ReactiveFormModule);
exports.ReactiveFormModule = ReactiveFormModule;
//# sourceMappingURL=reactiveform.module.js.map