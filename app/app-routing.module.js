"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
// import { LoginComponent } from './login/login.component';
var forbidden_component_1 = require("./forbidden/forbidden.component");
var welcome_component_1 = require("./home/welcome.component");
var unauthorized_component_1 = require("./unauthorized/unauthorized.component");
var routes = [
    // { path: 'login', component: LoginComponent },
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // // otherwise redirect to home
    // { path: '**', redirectTo: 'login' }
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'Forbidden', component: forbidden_component_1.ForbiddenComponent },
    { path: 'Unauthorized', component: unauthorized_component_1.UnauthorizedComponent },
];
var AppRouteModule = (function () {
    function AppRouteModule() {
    }
    return AppRouteModule;
}());
AppRouteModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(routes)
        ],
        declarations: [],
        exports: [router_1.RouterModule]
    })
], AppRouteModule);
exports.AppRouteModule = AppRouteModule;
//# sourceMappingURL=app-routing.module.js.map