import { Component, Input } from '@angular/core';

import {  WelcomeAdComponent   }      from '../home/welcomeAd.component';

@Component({
  template: `
    <link href="/app/assets/css/linkedin.css" rel="stylesheet" />
    <div class="job-ad">
      <h4>{{data.headline}}</h4> 
      
      {{data.body}}
    </div>
  `
})
export class LinkedinComponent implements WelcomeAdComponent {
  @Input() data: any;

}

