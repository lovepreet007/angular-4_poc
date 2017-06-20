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
var pubsub_service_1 = require("../services/pubsub.service");
var ConsumerComponent = (function () {
    function ConsumerComponent(pubSubService) {
        this.pubSubService = pubSubService;
        this.processed = [];
        this.subscription = null;
    }
    ConsumerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.pubSubService.Stream.subscribe(function (customer) { console.log('subscribed'), _this.processCustomer(customer); });
    };
    // this.processCustomer(customer)
    ConsumerComponent.prototype.processCustomer = function (customer) {
        this.processed.push(customer);
    };
    ConsumerComponent.prototype.stopProcessing = function () {
        this.subscription.unsubscribe();
    };
    return ConsumerComponent;
}());
ConsumerComponent = __decorate([
    core_1.Component({
        selector: 'consumer',
        templateUrl: 'app/pubsub/consumer.component.html'
    }),
    __metadata("design:paramtypes", [pubsub_service_1.PubSubService])
], ConsumerComponent);
exports.ConsumerComponent = ConsumerComponent;
//# sourceMappingURL=consumer.component.js.map