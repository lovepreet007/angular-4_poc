import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { MongoComponent } from './mongoform.component'
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [RouterModule.forChild([
        { path: 'mongo', component: MongoComponent }
    ]),FormsModule,BrowserModule],
    declarations: [MongoComponent],
 

})
export class MongoFormRouteModule {

}