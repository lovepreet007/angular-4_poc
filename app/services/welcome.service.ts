import { Injectable }           from '@angular/core';

import { FacebookComponent }   from '../banner/facebook.component';
 import { TwitterComponent } from '../banner/twitter.component';
 import { LinkedinComponent }   from '../banner/linkedin.component';
 import { GmailComponent } from '../banner/gmail.component';
import { WelcomeItem } from '../home/welcomeItem';

@Injectable()
export class WelcomeService {
  getWelcomeAds() {
    return [
      new WelcomeItem(FacebookComponent, {headline: 'facebook', body: 'Brave as they come'}),

      new WelcomeItem(TwitterComponent, {headline: 'twitter', body: 'Smart as they come'}),

      new WelcomeItem(GmailComponent,   {headline: 'gmail',
                                        body: 'Submit your resume today!'}),

      new WelcomeItem(LinkedinComponent,   {headline: 'linkedin',
                                        body: 'Apply today'}),
    ];
  }
}
