import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../models/login.model'
import { LoginService } from '../services/login.service'
import { NgForm } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent implements OnInit {

    model = new Login('', '', false);
    loginStatus: boolean = false;
    constructor(private _loginService: LoginService) {
    }
    ngOnInit() {

    }

    onLogin(ngForm: NgForm): void {
        debugger;
        this.loginStatus = false;
        this._loginService.postLoginForm(this.model).subscribe(response => this.loginResponse(response));
    }

    loginResponse(response: any): void {
        if (response.status === 'Failure') {
            this.loginStatus = true;
        } else {
            this.loginStatus = false;
        }
    }
}