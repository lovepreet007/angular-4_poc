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
var customer_1 = require("../event/customer");
var pubsub_service_1 = require("../services/pubsub.service");
var ProducerComponent = (function () {
    function ProducerComponent(pubSubService) {
        this.pubSubService = pubSubService;
        // @Input() firstName = '';
        // @Input() lastName = '';
        this.firstName = '';
        this.lastName = '';
    }
    ProducerComponent.prototype.createCustomer = function () {
        var customer = new customer_1.Customer();
        customer.firstName = this.firstName;
        customer.lastName = this.lastName;
        this.pubSubService.Stream.emit(customer);
    };
    return ProducerComponent;
}());
ProducerComponent = __decorate([
    core_1.Component({
        selector: 'producer',
        template: "\n    <div>First Name</div>\n    <input [(ngModel)]=\"firstName\" />\n\n    <div>Last Name</div>\n    <input [(ngModel)]=\"lastName\" />\n\n    <div style=\"margin-top: 10px;\">\n        <button (click)=\"createCustomer()\">Create Customer</button>\n    </div>"
    }),
    __metadata("design:paramtypes", [pubsub_service_1.PubSubService])
], ProducerComponent);
exports.ProducerComponent = ProducerComponent;
//# sourceMappingURL=producer.component.js.map