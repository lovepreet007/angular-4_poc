
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { ProductRouteModule } from './product-routing.module';

import { ProductGuardService } from './product-guard.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service'

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';


@NgModule({
    imports: [SharedModule, ProductRouteModule, BrowserModule],
    declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
    providers: [ProductGuardService, ProductService],
})
export class ProductModule {

}