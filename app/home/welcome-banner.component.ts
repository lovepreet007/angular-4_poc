import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { WelcomeDirective } from './welcome.directive';
import { WelcomeItem }      from './welcomeItem';
import { WelcomeAdComponent } from './welcomeAd.component';

@Component({
  selector: 'add-banner',
  template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
              </div>
            `
})
export class WelcomeBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: WelcomeItem[];
  currentAddIndex: number = -1;
  @ViewChild(WelcomeDirective) adHost: WelcomeDirective;
  subscription: any;
  interval: any;

  constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<WelcomeAdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
