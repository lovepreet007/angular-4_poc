"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pubsub_routing_module_1 = require("./pubsub-routing.module");
var forms_1 = require("@angular/forms");
var producer_component_1 = require("./producer.component");
var consumer_component_1 = require("./consumer.component");
var consumer2_component_1 = require("./consumer2.component");
var pubsub_component_1 = require("./pubsub.component");
var pubsub_service_1 = require("../services/pubsub.service");
var platform_browser_1 = require("@angular/platform-browser");
var PubSubModule = (function () {
    function PubSubModule() {
    }
    return PubSubModule;
}());
PubSubModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, pubsub_routing_module_1.PubSubRouteModule, platform_browser_1.BrowserModule],
        declarations: [consumer_component_1.ConsumerComponent, producer_component_1.ProducerComponent, pubsub_component_1.PubSubComponent, consumer2_component_1.Consumer2Component],
        providers: [pubsub_service_1.PubSubService]
    })
], PubSubModule);
exports.PubSubModule = PubSubModule;
//# sourceMappingURL=pubsub.module.js.map