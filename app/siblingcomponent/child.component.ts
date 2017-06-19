import { Component, OnInit } from '@angular/core';
import { SiblingService } from '../services/siblingshared.service'

@Component({
    selector: 'child-component',
    template: `
        <h1>I am a child</h1>
        <div>
           <ul *ngFor ="let d of data">
                <li>{{d}}</li>
            </ul>
        </div>
    `
})
export class ChildComponent implements OnInit {
    data: string[] = [];
    constructor(
        private _siblingService: SiblingService) { }
    ngOnInit(): any {
        this.data = this._siblingService.dataArray;
    }
}