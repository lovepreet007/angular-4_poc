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
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login.component");
var login_routing_module_1 = require("./login-routing.module");
var login_service_1 = require("../services/login.service");
var LoginFormModule = (function () {
    function LoginFormModule() {
    }
    return LoginFormModule;
}());
LoginFormModule = __decorate([
    core_1.NgModule({
        declarations: [login_component_1.LoginComponent],
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, login_routing_module_1.LoginRouteModule],
        providers: [login_service_1.LoginService]
    })
], LoginFormModule);
exports.LoginFormModule = LoginFormModule;
//# sourceMappingURL=login.module.js.map