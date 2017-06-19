import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login-routing.module';
import { LoginService } from '../services/login.service'
@NgModule({
    declarations: [LoginComponent],
    imports: [BrowserModule, FormsModule,LoginRouteModule],
    providers:[LoginService]
})

export class LoginFormModule {

}