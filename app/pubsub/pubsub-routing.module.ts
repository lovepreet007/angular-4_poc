import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PubSubComponent } from './pubsub.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'pubsub', component: PubSubComponent }           
        ])
    ]    
})
export class PubSubRouteModule { }
