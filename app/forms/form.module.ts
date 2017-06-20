import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormRouteModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormPoster } from '../services/form-poster.service';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from '../httpFactory/http.factory';
// import { ToasterModule} from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {AgGridModule} from 'ag-grid-angular/main';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
    declarations: [FormComponent],
    providers: [FormPoster, {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    }],
    imports: [FormsModule,BrowserAnimationsModule, AgGridModule.withComponents([]), ToastModule.forRoot(), HttpModule, Angular2FontawesomeModule, FormRouteModule, BrowserModule]
    // imports: [FormsModule, HttpModule, FormRouteModule, BrowserModule]
})

export class FormModule {
} 