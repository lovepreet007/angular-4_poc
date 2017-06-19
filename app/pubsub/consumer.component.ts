
import { Component } from '@angular/core'
import { Customer } from '../event/customer'
import { PubSubService } from '../services/pubsub.service'
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'consumer',
    templateUrl:'app/pubsub/consumer.component.html'    
})
export class ConsumerComponent {
    processed: any = [];
    subscription: Subscription = null;
    constructor(private pubSubService: PubSubService) {
    }
    ngOnInit() {
        debugger;
        this.subscription = this.pubSubService.Stream.subscribe(customer =>{console.log('subscribed'),this.processCustomer(customer)} );
    }
    // this.processCustomer(customer)
    processCustomer(customer: any) {
        debugger;
        this.processed.push(customer);
    }
    stopProcessing() {
        this.subscription.unsubscribe();
    }
}

