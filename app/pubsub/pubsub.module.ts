import { NgModule } from '@angular/core';

import { PubSubRouteModule } from './pubsub-routing.module'
import { FormsModule } from '@angular/forms';
import { ProducerComponent } from './producer.component';
import { ConsumerComponent } from './consumer.component';
import { Consumer2Component } from './consumer2.component';
import { PubSubComponent } from './pubsub.component';
import {PubSubService} from '../services/pubsub.service';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    imports: [FormsModule,PubSubRouteModule,BrowserModule],
    declarations: [ConsumerComponent,ProducerComponent,PubSubComponent,Consumer2Component],
    providers:[PubSubService]
  
})
export class PubSubModule {

}