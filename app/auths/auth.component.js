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
var angular2_jwt_1 = require("angular2-jwt");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var App = (function () {
    function App(authHttp) {
        this.authHttp = authHttp;
    }
    App.prototype.getThing = function () {
        // let body = JSON.stringify(login);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var myHeader = new http_1.Headers();
        myHeader.append('Content-Type', 'application/json');
        this.authHttp.get('http://example.com/api/thing', { headers: myHeader })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Request Complete'); });
        // Pass it after the body in a POST request
        this.authHttp.post('http://example.com/api/thing', 'post body', { headers: myHeader })
            .subscribe(function (data) { return console.log(data); }, function (err) { return console.log(err); }, function () { return console.log('Request Complete'); });
    };
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'auth',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof angular2_jwt_1.AuthHttp !== "undefined" && angular2_jwt_1.AuthHttp) === "function" && _a || Object])
], App);
exports.App = App;
var _a;
//# sourceMappingURL=auth.component.js.map