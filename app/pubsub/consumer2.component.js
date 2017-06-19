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
var Consumer2Component = (function () {
    function Consumer2Component(pubSubService) {
        this.pubSubService = pubSubService;
        this.data = [];
        this.subscription = null;
    }
    Consumer2Component.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.subscription = this.pubSubService.Stream.subscribe(function (customer) { console.log('subscribed'), _this.listOfCustomer(customer); });
    };
    // this.processCustomer(customer)
    Consumer2Component.prototype.listOfCustomer = function (customer) {
        debugger;
        this.data.push(customer);
    };
    Consumer2Component.prototype.stopProcessing = function () {
        this.subscription.unsubscribe();
    };
    return Consumer2Component;
}());
Consumer2Component = __decorate([
    core_1.Component({
        selector: 'consumer2',
        template: "<div><h3>Consumer 2</h3></div>\n    <div>\n           <ul *ngFor =\"let d of data\">\n                <li>{{d.firstName}}&nbsp;{{d.lastName}}</li>\n            </ul>\n        </div> \n        "
    }),
    __metadata("design:paramtypes", [pubsub_service_1.PubSubService])
], Consumer2Component);
exports.Consumer2Component = Consumer2Component;
//# sourceMappingURL=consumer2.component.js.map