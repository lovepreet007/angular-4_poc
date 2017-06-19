import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { SampleComponent } from './sample.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'parentchild', component: SampleComponent }           
        ])
    ]   ,   
    
    exports: [RouterModule]
   
})
export class SampleRouteModule { }





