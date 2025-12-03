import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHighlight]' })
export class HighlightDirective {
  @Input('appHighlight') color = '#f6fafe';
  @HostBinding('style.background') background: string | null = null;

  @HostListener('mouseenter') onEnter() { this.background = this.color; }
  @HostListener('mouseleave') onLeave() { this.background = null; }
}
