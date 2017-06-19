import { Component, Input } from '@angular/core';

import { WelcomeAdComponent } from '../home/welcomeAd.component';

@Component({
    template: `<link href="/app/assets/css/creative.css" rel="stylesheet" />
      <h4>{{data.headline}}</h4> 
      {{data.body}}`
})
export class FacebookComponent implements WelcomeAdComponent {
    @Input() data: any;

}

