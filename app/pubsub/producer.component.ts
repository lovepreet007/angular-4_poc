
import { Component, Input } from '@angular/core'
import { Customer } from '../event/customer'
import { PubSubService } from '../services/pubsub.service'


@Component({
    selector: 'producer',
    template:
    `
    <div>First Name</div>
    <input [(ngModel)]="firstName" />

    <div>Last Name</div>
    <input [(ngModel)]="lastName" />

    <div style="margin-top: 10px;">
        <button (click)="createCustomer()">Create Customer</button>
    </div>`
})
export class ProducerComponent {
    // @Input() firstName = '';
    // @Input() lastName = '';
    firstName: string = '';
    lastName: string = '';
    constructor(private pubSubService: PubSubService) {
    }
    createCustomer() {
        let customer = new Customer();
        customer.firstName = this.firstName;
        customer.lastName = this.lastName;
        this.pubSubService.Stream.emit(customer);
    }
}