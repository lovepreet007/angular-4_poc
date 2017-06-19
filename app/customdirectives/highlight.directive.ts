import { Directive, ElementRef, Input, HostListener } from '@angular/core'
@Directive({
    selector: '[myHighlight]'
})

export class HighlightDirective {
    @Input('myHighlight') highlightedColor: string;
    @Input() defaultColor: string;
    constructor(private elementref: ElementRef) {
    }
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightedColor || this.defaultColor || 'red');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    private highlight(color: string) {
        this.elementref.nativeElement.style.backgroundColor = color;
    }
}