import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'products/:id', canActivate: [ProductGuardService], component: ProductDetailComponent }
        ])
    ],   
    exports: [RouterModule]
})
export class ProductRouteModule { }
