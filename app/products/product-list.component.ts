import { Component, OnInit } from '@angular/core'
import { IProduct } from './product'
import { ProductService } from './product.service'
import { Http } from "@angular/http";

@Component({
    // selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imgWidth: number = 50;
    imgMargin: number = 2;
    showImage: boolean = false;
    listFilters: string = 'cart';
    products: IProduct[];
    errorMessage: string;
    toggleImage = (): void => {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('Oninit');

        // this._productService.getProducts().subscribe(p => this.products = p, e => this.errorMessage = <any>e)
        this.http.get('').subscribe(p => this.products = p.json(), e => this.errorMessage = <any>e)
        console.log(this.errorMessage);
    }

    onRatingClicked(message: string) {
        this.pageTitle = 'ProductList :' + message;
    }

    constructor(private _productService: ProductService, private http: Http) {

    }

}