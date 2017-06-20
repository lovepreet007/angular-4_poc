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
var security_service_1 = require("./services/security.service");
var AppComponent = (function () {
    function AppComponent(securityService) {
        this.securityService = securityService;
        this.products = [1, 2, 3, 4, 5];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('ngOnInit _securityService.AuthorizedCallback');
        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }
    };
    AppComponent.prototype.Login = function () {
        console.log('Do login logic');
        this.securityService.Authorize();
    };
    AppComponent.prototype.Logout = function () {
        console.log('Do logout logic');
        this.securityService.Logoff();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({ moduleId: module.id,
        selector: 'pm-app',
        // template:'<h1>{{pageTitle}}<pm-products></pm-products></h1>',
        template: "<div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>                \n                <ul class='nav navbar-nav'>                    \n                    <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                    <li><a [routerLink]=\"['/forms']\">Form</a></li>\n                    <li><a [routerLink]=\"['/parentchild']\">Parent-Child</a></li>                  \n                    <li><a [routerLink]=\"['/sibling']\">Sibling-Child</a></li>  \n                    <li><a [routerLink]=\"['/pubsub']\">Pub-Sub</a></li>\n                    <li><a [routerLink]=\"['/reactive']\">Reactive</a></li>    \n\n                     <li><a class=\"navigationLinkButton\" *ngIf=\"!securityService.IsAuthorized()\" (click)=\"Login()\">Login</a></li>\n                    <li><a class=\"navigationLinkButton\" *ngIf=\"securityService.IsAuthorized()\" (click)=\"Logout()\">Logout</a></li>               \n                </ul>\n            </div>\n        </nav>  \n         <div class='container'>         \n            <router-outlet></router-outlet>\n        </div>    \n     </div>"
    }),
    __metadata("design:paramtypes", [security_service_1.SecurityService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map