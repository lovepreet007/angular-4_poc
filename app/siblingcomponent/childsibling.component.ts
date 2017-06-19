import { Component } from '@angular/core';
import { SiblingService } from '../services/siblingshared.service'

@Component({
    selector: 'child-sibling-component',
    template: `
        <h1>I am a sibling</h1>
        <input type="text" [(ngModel)]='data'/>
        <button (click)='addData()'>Click To Add</button>
    `
})
export class ChildSiblingComponent {
    data: string = 'Testing data';
    constructor(
        private _siblingService: SiblingService) { }
    addData() {
        this._siblingService.insertData(this.data);
        this.data = '';
    }
}