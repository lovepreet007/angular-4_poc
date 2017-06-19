import { Injectable } from '@angular/core'

import { IProduct } from './product'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class ProductService {
    // public _productUrl: string = 'api/products/products.json';
    public _productUrl: string = 'http://localhost:58065/api/home';

    constructor(private _http: Http) {
    }
    getProducts(): Observable<IProduct[]> {

        return this._http.get(this._productUrl).map((response: Response) => <IProduct[]>response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.errorHandler);
    }
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

    private errorHandler(error: Response) {
        return Observable.throw(error.json().error || 'server error')
    }
}