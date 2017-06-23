"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mongoformroute_module_1 = require("./mongoformroute.module");
var http_1 = require("@angular/http");
var http_factory_1 = require("../httpFactory/http.factory");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var MongoFormModule = (function () {
    function MongoFormModule() {
    }
    return MongoFormModule;
}());
MongoFormModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, animations_1.BrowserAnimationsModule, mongoformroute_module_1.MongoFormRouteModule, ng2_toastr_1.ToastModule.forRoot()],
        providers: [{
                provide: http_1.Http,
                useFactory: http_factory_1.httpFactory,
                deps: [http_1.XHRBackend, http_1.RequestOptions]
            }],
    })
], MongoFormModule);
exports.MongoFormModule = MongoFormModule;
//# sourceMappingURL=mongoform.module.js.map