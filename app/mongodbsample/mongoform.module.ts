import {NgModule} from '@angular/core'
import {MongoFormRouteModule} from './mongoformroute.module'
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { httpFactory } from '../httpFactory/http.factory';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    imports:[HttpModule,BrowserAnimationsModule,MongoFormRouteModule, ToastModule.forRoot()],
      providers: [ {
        provide: Http,
        useFactory: httpFactory,
        deps: [XHRBackend, RequestOptions]
    }],
})
export class MongoFormModule{
}