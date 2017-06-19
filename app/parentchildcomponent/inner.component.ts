import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core'


@Component({
    selector: 'inner-app',
    templateUrl: 'app/parentchildcomponent/inner.component.html'
})
export class InnerComponent implements OnInit {


    @Input() childvariable: string;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.notify.emit('Click from nested component');
    }





    constructor() {
    }

    ngOnInit(): void {
    }

}

