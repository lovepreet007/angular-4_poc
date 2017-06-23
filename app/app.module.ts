import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './app-routing.module';
import { HttpModule } from "@angular/http";
import { ProductModule } from './products/product.module';
import { FormModule } from './forms/form.module';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';

import { SecurityService } from './services/security.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { WelcomeComponent } from './home/welcome.component';
import { WelcomeBannerComponent } from './home/welcome-banner.component';
import { WelcomeDirective } from './home/welcome.directive';
import { SampleModule } from './parentchildcomponent/sample.module';
import { SiblingModule } from './siblingcomponent/siblingcomponent.module';
import { PubSubModule } from './pubsub/pubsub.module';
import { LoginFormModule } from './login/login.module';
import { ReactiveFormModule } from './reactiveforms/reactiveform.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeService } from './services/welcome.service';
import { FacebookComponent } from './banner/facebook.component'
import { GmailComponent } from './banner/gmail.component'
import { LinkedinComponent } from './banner/linkedin.component'
import { TwitterComponent } from './banner/twitter.component'
import {MongoFormModule} from './mongodbsample/mongoform.module'



@NgModule({
    imports: [BrowserModule, HttpModule,  ProductModule, SampleModule, SiblingModule, PubSubModule,ReactiveFormsModule, ReactiveFormModule, LoginFormModule,FormModule, AppRouteModule,MongoFormModule],
    declarations: [AppComponent, WelcomeDirective, WelcomeBannerComponent, WelcomeComponent, FacebookComponent, GmailComponent, LinkedinComponent, TwitterComponent, ForbiddenComponent, UnauthorizedComponent],
    bootstrap: [AppComponent],
    entryComponents: [FacebookComponent, GmailComponent, LinkedinComponent, TwitterComponent],
    providers: [WelcomeService,SecurityService, Configuration]
})
export class AppModule { }
