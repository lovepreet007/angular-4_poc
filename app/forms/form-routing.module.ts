import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { FormComponent } from './form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'forms', component: FormComponent }           
        ])
    ],   
    
    exports: [RouterModule]
})
export class FormRouteModule { }
