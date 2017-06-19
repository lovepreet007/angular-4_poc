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
var product_service_1 = require("./product.service");
var http_1 = require("@angular/http");
var ProductListComponent = (function () {
    function ProductListComponent(_productService, http) {
        var _this = this;
        this._productService = _productService;
        this.http = http;
        this.pageTitle = 'Product List';
        this.imgWidth = 50;
        this.imgMargin = 2;
        this.showImage = false;
        this.listFilters = 'cart';
        this.toggleImage = function () {
            _this.showImage = !_this.showImage;
        };
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Oninit');
        debugger;
        // this._productService.getProducts().subscribe(p => this.products = p, e => this.errorMessage = <any>e)
        this.http.get('').subscribe(function (p) { return _this.products = p.json(); }, function (e) { return _this.errorMessage = e; });
        console.log(this.errorMessage);
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'ProductList :' + message;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        // selector: 'pm-products',
        moduleId: module.id,
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, http_1.Http])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map