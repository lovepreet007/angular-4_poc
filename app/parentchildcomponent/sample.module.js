"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sample_component_1 = require("./sample.component");
var inner_component_1 = require("./inner.component");
var platform_browser_1 = require("@angular/platform-browser");
var sample_routing_module_1 = require("./sample-routing.module");
var highlight_directive_1 = require("../customdirectives/highlight.directive");
var SampleModule = (function () {
    function SampleModule() {
    }
    return SampleModule;
}());
SampleModule = __decorate([
    core_1.NgModule({
        imports: [sample_routing_module_1.SampleRouteModule, platform_browser_1.BrowserModule],
        declarations: [sample_component_1.SampleComponent, inner_component_1.InnerComponent, highlight_directive_1.HighlightDirective]
    })
], SampleModule);
exports.SampleModule = SampleModule;
//# sourceMappingURL=sample.module.js.map