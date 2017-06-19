import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { SiblingRouteModule } from './siblingcomponent-routing';
import { ChildSiblingComponent } from './childsibling.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SiblingService } from '../services/siblingshared.service';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [SiblingRouteModule, BrowserModule,FormsModule],
    declarations: [ChildSiblingComponent, ChildComponent, ParentComponent]   
})

export class SiblingModule {

}

