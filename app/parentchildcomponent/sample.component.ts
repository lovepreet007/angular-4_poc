import { Component, OnInit } from '@angular/core'


@Component({
    selector: 'sample-app',
    templateUrl: 'app/parentchildcomponent/sample.component.html',

})
export class SampleComponent implements OnInit {
    parentvaribale: string = 'from parent to child';
    color: string;
    onNotify(message: string): void {
        alert(message);
    }
    constructor() {
    }

    ngOnInit(): void {
    }

}

