import { Directive, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[frPageScroll]'
})
export class ScrollDirective {

  @Output() scroll = new EventEmitter();

  constructor(private element: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    let bottomPage = false;
    let scrollHeight = $(document).height();
    let scrollPosition = Math.round($(window).height() + $(window).scrollTop()) + 10 ; // <-- margin error on long page

    if ((scrollHeight - scrollPosition) <= 0) {
      bottomPage = true;
    }

    this.scroll.emit({
      bottomPage: bottomPage,
      scrollHeight: scrollHeight,
      scrollPosition: scrollPosition
    });
  }

}
