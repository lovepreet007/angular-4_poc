"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("./product.service");
var http_1 = require("@angular/http");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(activateRoute, _router, _productService, http) {
        this.activateRoute = activateRoute;
        this._router = _router;
        this._productService = _productService;
        this.http = http;
        this.products = [];
        this.pageTitle = 'Product Details';
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.activateRoute.snapshot.params['id'];
        // this.product.description = ''; this.product.imageUrl = ''; this.product.price = 0; this.product.productCode = ''; this.product.productId = 0; this.product.productName = ''; this.product.releaseDate = ''; this.product.starRating = 0;
        this.sub = this.activateRoute.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
        this.pageTitle += " : " + id;
    };
    ProductDetailComponent.prototype.getProduct = function (id) {
        // this._productService.getProduct(id).subscribe(
        var _this = this;
        //     res => {               
        //         // this.product =<IProduct>JSON.parse(JSON.stringify(res));
        //         console.log('before component ' + JSON.stringify(res,undefined,2));     
        //         this.product =  res
        //         console.log('after component ' +  JSON.stringify(this.product,undefined,2));                
        //     },
        //     error => this.errorMessage = <any>error),
        //     console.log('execution complete');
        this.http.get('/GetById/' + id).subscribe(function (res) {
            // this.product =<IProduct>JSON.parse(JSON.stringify(res));
            console.log('before component ' + JSON.stringify(res, undefined, 2));
            _this.product = res.json();
            console.log('after component ' + JSON.stringify(_this.product, undefined, 2));
        }, function (error) { return _this.errorMessage = error; }),
            console.log('execution complete');
    };
    ProductDetailComponent.prototype.OnBackClick = function () {
        this._router.navigate(['/products']);
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductDetailComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Product Detail: ' + message;
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'productDetail',
        templateUrl: 'app/products/product-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService, http_1.Http])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map