"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PubSubComponent = (function () {
    function PubSubComponent() {
    }
    return PubSubComponent;
}());
PubSubComponent = __decorate([
    core_1.Component({
        selector: 'pubsub',
        template: " \n <link href=\"/app/assets/css/section.css\" rel=\"stylesheet\" />\n\n\n <div class=\"wrap\">    \n    <div class=\"box fleft comp1\"><consumer></consumer></div>\n    <div class=\"box fleft comp2\"><producer></producer></div>\n    <div class=\"box fleft comp3\"><consumer2></consumer2></div>\n</div>\n \n\n   \n  "
    })
], PubSubComponent);
exports.PubSubComponent = PubSubComponent;
// <h1>Pub Sub Using Observables</h1>
//     <producer></producer>
//     <br/><br/>
//     <consumer></consumer>
//      <br/><br/>
//      <consumer2></consumer2> 
//# sourceMappingURL=pubsub.component.js.map