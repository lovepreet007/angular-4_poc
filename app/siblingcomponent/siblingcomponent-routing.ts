import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ParentComponent } from './parent.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'sibling', component: ParentComponent }           
        ])
    ]   ,   
    
    exports: [RouterModule]
   
})
export class SiblingRouteModule { }




