import { Injectable } from "@angular/core"
import { Login } from "../models/login.model"
import { ResponseVm } from "../models/responseVm.model"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'


@Injectable()
export class LoginService {
    constructor(private _http: Http) {
    }

    extractData(res: Response): ResponseVm {
        let body = <ResponseVm>res.json();
        debugger;
         return body || null;
       
    }
    handleError(err: any) {

        return Observable.throw(err.statusText);
    }
    postLoginForm(login: Login): Observable<ResponseVm> {
debugger;
        let body = JSON.stringify(login);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post('http://localhost:58065/api/login', body, options).map(this.extractData).catch(this.handleError);
        // console.log('Posting Employee ' + employee);
    }
    
    extractLanguage(res:Response){
        return <string[]>res.json();
    }

}