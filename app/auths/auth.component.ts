import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Component } from '@angular/core'

@Component({
    selector: 'auth',

})
export class App {

    thing: string;

    constructor(public authHttp: AuthHttp) { }

    getThing() {


        // let body = JSON.stringify(login);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let myHeader = new Headers();
        myHeader.append('Content-Type', 'application/json');

        this.authHttp.get('http://example.com/api/thing', { headers: myHeader })
            .subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Request Complete')
            );

        // Pass it after the body in a POST request
        this.authHttp.post('http://example.com/api/thing', 'post body', { headers: myHeader })
            .subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Request Complete')
            );
    }
}