import { Injectable } from '@angular/core'
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router'


@Injectable()
export class ProductGuardService implements CanActivate {

    constructor(private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let value = + route.url[1].path;
        if (isNaN(value) || value < 1) {
            alert("Inserted Invalid Product ID");
            this.router.navigate(['/products']);
            return false;
        }
        return true;
    }
}