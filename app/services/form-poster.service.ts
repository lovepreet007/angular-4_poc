import { Injectable } from "@angular/core"
import { Employee } from "../models/employee.model"
import { ResponseVm } from "../models/responseVm.model"
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'


@Injectable()
export class FormPoster {
    constructor(private _http: Http) {
    }

    extractData(res: Response): ResponseVm {
        let body = <ResponseVm>res.json();
        return body || null;

    }
    extractTempData(res: any): Employee {
        let body = <Employee>res.json();
        return body || null;

    }
    handleError(err: any) {
        return Observable.throw(err.statusText);
    }
    // postEmployeeForm(employee: Employee): Observable<ResponseVm> {

    //     let body = JSON.stringify(employee);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._http.post('http://localhost:58065/api/home/SaveEmployee', body, options).map(this.extractData).catch(this.handleError);
    //     // console.log('Posting Employee ' + employee);
    // }
    // postTemporaryEmployeeForm(employee: Employee): Observable<ResponseVm> {

    //     let body = JSON.stringify(employee);
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this._http.post('http://localhost:58065/api/home/SaveTempEmployee', body, options).map(this.extractData).catch(this.handleError);
    //     // console.log('Posting Employee ' + employee);
    // }
    // getTemporaryEmployeeForm(): Observable<Employee> {
    //     return this._http.get('http://localhost:58065/api/home/GetTempEmployee').map(this.extractTempData).catch(this.handleError);
    // }
    getAllLanguages(): Observable<string[]> {
        return this._http.get('http://localhost:58065/api/home').map(this.extractLanguage).catch(this.handleError);
        // console.log('Posting Employee ' + employee);
    }

    extractLanguage(res: Response) {
        return <string[]>res.json();
    }

}