import { Component, Input } from '@angular/core';

import {  WelcomeAdComponent   }      from '../home/welcomeAd.component';

@Component({
  template: `
  <link href="/app/assets/css/twitter.css" rel="stylesheet" />
    <div class="job-ad">
      <h4>{{data.headline}}</h4> 
      
      {{data.body}}
    </div>
  `
})
export class TwitterComponent implements WelcomeAdComponent {
  @Input() data: any;

}

