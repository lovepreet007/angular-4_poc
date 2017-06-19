import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ReactiveFormComponent } from './reactiveform.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'reactive', component: ReactiveFormComponent }           
        ])
    ]   
})
export class ReactiveFormRouteModule { }
