
import { Injectable } from '@angular/core'
import { CustomerEventEmitter } from '../event/customer-event-emitter'


@Injectable()
export class PubSubService {
    Stream: CustomerEventEmitter;
    constructor() {       
        this.Stream = new CustomerEventEmitter();
    }
}


