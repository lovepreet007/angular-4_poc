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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        // public _productUrl: string = 'api/products/products.json';
        this._productUrl = 'http://localhost:58065/api/home';
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get(this._productUrl).map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All' + JSON.stringify(data)); })
            .catch(this.errorHandler);
    };
    // getProduct(id: number): Observable<IProduct> {
    //     //    let body = JSON.stringify(id);
    //     // let headers = new Headers({ 'Content-Type': 'application/json' });
    //     // let options = new RequestOptions({ headers: headers });
    //     // return this._http.post(this._productUrl +'/GetById',body,options).map((response: Response) => <IProduct>response.json())
    //     //     .do(data => console.log('All' + JSON.stringify(data)))
    //     //     .catch(this.errorHandler);
    //     return this._http.get(this._productUrl + '/GetById/' + id).map((response: Response) => <IProduct>response.json())
    //         .catch(this.errorHandler);
    //     // this._productUrl +'/GetById/'+id.toString() .do(data => console.log('in service ' + JSON.stringify(data)))
    // }
    ProductService.prototype.errorHandler = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'server error');
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map