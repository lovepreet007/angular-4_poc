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
var form_routing_module_1 = require("./form-routing.module");
var form_component_1 = require("./form.component");
var platform_browser_1 = require("@angular/platform-browser");
var form_poster_service_1 = require("../services/form-poster.service");
var http_1 = require("@angular/http");
var http_factory_1 = require("../httpFactory/http.factory");
// import { ToasterModule} from 'angular2-toaster';
var animations_1 = require("@angular/platform-browser/animations");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var main_1 = require("ag-grid-angular/main");
var angular2_fontawesome_1 = require("angular2-fontawesome/angular2-fontawesome");
var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    core_1.NgModule({
        declarations: [form_component_1.FormComponent],
        providers: [form_poster_service_1.FormPoster, {
                provide: http_1.Http,
                useFactory: http_factory_1.httpFactory,
                deps: [http_1.XHRBackend, http_1.RequestOptions]
            }],
        imports: [forms_1.FormsModule, animations_1.BrowserAnimationsModule, main_1.AgGridModule.withComponents([]), ng2_toastr_1.ToastModule.forRoot(), http_1.HttpModule, angular2_fontawesome_1.Angular2FontawesomeModule, form_routing_module_1.FormRouteModule, platform_browser_1.BrowserModule]
        // imports: [FormsModule, HttpModule, FormRouteModule, BrowserModule]
    })
], FormModule);
exports.FormModule = FormModule;
//# sourceMappingURL=form.module.js.map