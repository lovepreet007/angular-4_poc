import { Component } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';
import { WelcomeAdComponent } from './welcomeAd.component';

@Component({
    templateUrl: 'app/home/welcome.component.html',
     styleUrls: ['app/home/welcome.css']
})
export class WelcomeComponent {

    pageTitle:string='Welcome';
    ads: WelcomeAdComponent[];

    constructor(private welcomeService: WelcomeService) { }

    ngOnInit() {
        this.ads = this.welcomeService.getWelcomeAds();
    }
}
