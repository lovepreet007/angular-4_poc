

import { Component } from '@angular/core'
import { SecurityService } from './services/security.service';


@Component({ moduleId: module.id,
    selector: 'pm-app',
    // template:'<h1>{{pageTitle}}<pm-products></pm-products></h1>',
    template:
    `<div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>                
                <ul class='nav navbar-nav'>                    
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                    <li><a [routerLink]="['/forms']">Form</a></li>
                    <li><a [routerLink]="['/parentchild']">Parent-Child</a></li>                  
                    <li><a [routerLink]="['/sibling']">Sibling-Child</a></li>  
                    <li><a [routerLink]="['/pubsub']">Pub-Sub</a></li>
                    <li><a [routerLink]="['/reactive']">Reactive</a></li>    

                     <li><a class="navigationLinkButton" *ngIf="!securityService.IsAuthorized()" (click)="Login()">Login</a></li>
                    <li><a class="navigationLinkButton" *ngIf="securityService.IsAuthorized()" (click)="Logout()">Logout</a></li>               
                </ul>
            </div>
        </nav>  
         <div class='container'>         
            <router-outlet></router-outlet>
        </div>    
     </div>`
})
export class AppComponent {

  products:number[]=[1,2,3,4,5];
    constructor(public securityService: SecurityService) {
    }
    ngOnInit() {
        debugger;
        console.log('ngOnInit _securityService.AuthorizedCallback');

        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }






  
    }

    public Login() {
        console.log('Do login logic');
        this.securityService.Authorize();
    }

    public Logout() {
        console.log('Do logout logic');
        this.securityService.Logoff();
    }










 


}