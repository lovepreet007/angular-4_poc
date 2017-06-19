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
var login_model_1 = require("../models/login.model");
var login_service_1 = require("../services/login.service");
var LoginComponent = (function () {
    function LoginComponent(_loginService) {
        this._loginService = _loginService;
        this.model = new login_model_1.Login('', '', false);
        this.loginStatus = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (ngForm) {
        var _this = this;
        debugger;
        this.loginStatus = false;
        this._loginService.postLoginForm(this.model).subscribe(function (response) { return _this.loginResponse(response); });
    };
    LoginComponent.prototype.loginResponse = function (response) {
        if (response.status === 'Failure') {
            this.loginStatus = true;
        }
        else {
            this.loginStatus = false;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: 'app/login/login.component.html'
    }),
    __metadata("design:paramtypes", [login_service_1.LoginService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map