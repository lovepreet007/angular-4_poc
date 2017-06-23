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
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
var product_module_1 = require("./products/product.module");
var form_module_1 = require("./forms/form.module");
var app_component_1 = require("./app.component");
var app_constants_1 = require("./app.constants");
var security_service_1 = require("./services/security.service");
var unauthorized_component_1 = require("./unauthorized/unauthorized.component");
var forbidden_component_1 = require("./forbidden/forbidden.component");
var welcome_component_1 = require("./home/welcome.component");
var welcome_banner_component_1 = require("./home/welcome-banner.component");
var welcome_directive_1 = require("./home/welcome.directive");
var sample_module_1 = require("./parentchildcomponent/sample.module");
var siblingcomponent_module_1 = require("./siblingcomponent/siblingcomponent.module");
var pubsub_module_1 = require("./pubsub/pubsub.module");
var login_module_1 = require("./login/login.module");
var reactiveform_module_1 = require("./reactiveforms/reactiveform.module");
var forms_1 = require("@angular/forms");
var welcome_service_1 = require("./services/welcome.service");
var facebook_component_1 = require("./banner/facebook.component");
var gmail_component_1 = require("./banner/gmail.component");
var linkedin_component_1 = require("./banner/linkedin.component");
var twitter_component_1 = require("./banner/twitter.component");
var mongoform_module_1 = require("./mongodbsample/mongoform.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, product_module_1.ProductModule, sample_module_1.SampleModule, siblingcomponent_module_1.SiblingModule, pubsub_module_1.PubSubModule, forms_1.ReactiveFormsModule, reactiveform_module_1.ReactiveFormModule, login_module_1.LoginFormModule, form_module_1.FormModule, app_routing_module_1.AppRouteModule, mongoform_module_1.MongoFormModule],
        declarations: [app_component_1.AppComponent, welcome_directive_1.WelcomeDirective, welcome_banner_component_1.WelcomeBannerComponent, welcome_component_1.WelcomeComponent, facebook_component_1.FacebookComponent, gmail_component_1.GmailComponent, linkedin_component_1.LinkedinComponent, twitter_component_1.TwitterComponent, forbidden_component_1.ForbiddenComponent, unauthorized_component_1.UnauthorizedComponent],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [facebook_component_1.FacebookComponent, gmail_component_1.GmailComponent, linkedin_component_1.LinkedinComponent, twitter_component_1.TwitterComponent],
        providers: [welcome_service_1.WelcomeService, security_service_1.SecurityService, app_constants_1.Configuration]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map