import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { ReactiveFormComponent } from './reactiveform.component';
import {ReactiveFormRouteModule} from './reactiveform-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
declarations:[ReactiveFormComponent],
imports:[BrowserModule,ReactiveFormRouteModule,ReactiveFormsModule]
})

export class ReactiveFormModule {

}