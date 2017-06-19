import {Component} from '@angular/core';
import {SiblingService} from '../services/siblingshared.service';
import {ChildComponent} from './child.component';
import {ChildSiblingComponent} from './childsibling.component';
@Component({
    selector: 'parent-component',
    templateUrl: 'app/siblingcomponent/parent.component.html',
    providers: [SiblingService]    
})
export class ParentComponent{

} 