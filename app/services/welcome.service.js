"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var facebook_component_1 = require("../banner/facebook.component");
var twitter_component_1 = require("../banner/twitter.component");
var linkedin_component_1 = require("../banner/linkedin.component");
var gmail_component_1 = require("../banner/gmail.component");
var welcomeItem_1 = require("../home/welcomeItem");
var WelcomeService = (function () {
    function WelcomeService() {
    }
    WelcomeService.prototype.getWelcomeAds = function () {
        return [
            new welcomeItem_1.WelcomeItem(facebook_component_1.FacebookComponent, { headline: 'facebook', body: 'Brave as they come' }),
            new welcomeItem_1.WelcomeItem(twitter_component_1.TwitterComponent, { headline: 'twitter', body: 'Smart as they come' }),
            new welcomeItem_1.WelcomeItem(gmail_component_1.GmailComponent, { headline: 'gmail',
                body: 'Submit your resume today!' }),
            new welcomeItem_1.WelcomeItem(linkedin_component_1.LinkedinComponent, { headline: 'linkedin',
                body: 'Apply today' }),
        ];
    };
    return WelcomeService;
}());
WelcomeService = __decorate([
    core_1.Injectable()
], WelcomeService);
exports.WelcomeService = WelcomeService;
//# sourceMappingURL=welcome.service.js.map