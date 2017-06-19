import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from './product'
import { ProductService } from './product.service'
import { Subscription } from 'rxjs/Subscription';
import { Http } from "@angular/http";

@Component({
    selector: 'productDetail',
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit, OnDestroy {
    products: IProduct[] = [];
    product: IProduct;
    errorMessage: string;
    pageTitle: string = 'Product Details';
    private sub: Subscription;
    constructor(private activateRoute: ActivatedRoute, private _router: Router, private _productService: ProductService,private http:Http) {
    }

    ngOnInit(): void {

        let id = + this.activateRoute.snapshot.params['id'];
        // this.product.description = ''; this.product.imageUrl = ''; this.product.price = 0; this.product.productCode = ''; this.product.productId = 0; this.product.productName = ''; this.product.releaseDate = ''; this.product.starRating = 0;
        this.sub = this.activateRoute.params.subscribe(
            params => {
                let id = +params['id'];
                this.getProduct(id);
            });
        this.pageTitle += ` : ${id}`;
    }
    getProduct(id: number) {
        // this._productService.getProduct(id).subscribe(

        //     res => {               
        //         // this.product =<IProduct>JSON.parse(JSON.stringify(res));
        //         console.log('before component ' + JSON.stringify(res,undefined,2));     
        //         this.product =  res
        //         console.log('after component ' +  JSON.stringify(this.product,undefined,2));                
        //     },
        //     error => this.errorMessage = <any>error),
        //     console.log('execution complete');

         this.http.get('/GetById/' + id).subscribe(

            res => {               
                // this.product =<IProduct>JSON.parse(JSON.stringify(res));
                console.log('before component ' + JSON.stringify(res,undefined,2));     
                this.product =  res.json()
                console.log('after component ' +  JSON.stringify(this.product,undefined,2));                
            },
            error => this.errorMessage = <any>error),
            console.log('execution complete');  
    }
    OnBackClick(): void {
        this._router.navigate(['/products']);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    onRatingClicked(message: string): void {
        this.pageTitle = 'Product Detail: ' + message;
    }
}