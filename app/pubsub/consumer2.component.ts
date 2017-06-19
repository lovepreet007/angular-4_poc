
import { Component } from '@angular/core'
import { Customer } from '../event/customer'
import { PubSubService } from '../services/pubsub.service'
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'consumer2',
    template: `<div><h3>Consumer 2</h3></div>
    <div>
           <ul *ngFor ="let d of data">
                <li>{{d.firstName}}&nbsp;{{d.lastName}}</li>
            </ul>
        </div> 
        `
})
export class Consumer2Component {
    data: any = [];
    subscription: Subscription = null;
    constructor(private pubSubService: PubSubService) {
    }
    ngOnInit() {
        debugger;
        this.subscription = this.pubSubService.Stream.subscribe(customer => { console.log('subscribed'), this.listOfCustomer(customer) });
    }
    // this.processCustomer(customer)
    listOfCustomer(customer: any) {
        debugger;
        this.data.push(customer);
    }
    stopProcessing() {
        this.subscription.unsubscribe();
    }
}

