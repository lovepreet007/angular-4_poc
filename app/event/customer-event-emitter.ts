import { Subject } from 'rxjs/Subject';
import { Customer } from './customer';
export class CustomerEventEmitter extends Subject<Customer>{
    constructor() {
        super();
    }
    emit(value: any) {
        super.next(value);
    }
}

