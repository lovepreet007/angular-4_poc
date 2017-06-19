import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { SampleComponent } from "./sample.component";
import { InnerComponent } from "./inner.component";
import { BrowserModule } from '@angular/platform-browser';
import { SampleRouteModule } from './sample-routing.module';
import { HighlightDirective } from '../customdirectives/highlight.directive'


@NgModule({
    imports: [SampleRouteModule, BrowserModule],
    declarations: [SampleComponent, InnerComponent, HighlightDirective]
})

export class SampleModule {

}

