import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class WelcomeDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

