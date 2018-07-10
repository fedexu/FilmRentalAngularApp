import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[frSticky]'
})
export class StickyDirective {

  private sticked: boolean = true;
  private selectedOffset: number = 0;
  private windowOffsetTop: number = 0;

  private previwWidth:string;
  private previwZIndex:string;
  private previewMargin:any;

  @Input() addClass: string = 'fixed';
  @Input() offSet: number = 0;
  @Input() offSetToStart:number = -1;

  constructor(private el: ElementRef, private render:Renderer2) {
    this.selectedOffset = this.el.nativeElement.offsetTop;
    this.previwWidth = this.el.nativeElement.style.width;
    this.previwZIndex = this.el.nativeElement.style.zIndex;
    this.previewMargin = this.el.nativeElement.style.margin;
  }

  private addSticky() {
    this.sticked = true;
    this.el.nativeElement.style.position = 'fixed';
    this.el.nativeElement.style.top = this.offSet + 'px';
    this.el.nativeElement.style.width = '100%';
    this.el.nativeElement.style.zIndex = '999';
    this.el.nativeElement.style.left = 0;
      
    this.render.addClass(this.el.nativeElement, this.addClass);
  }

  private removeSticky() {
    this.sticked = false;
    this.el.nativeElement.style.position = '';
    this.el.nativeElement.style.width = this.previwWidth;
    this.el.nativeElement.style.zIndex = this.previwZIndex;
    this.render.removeClass(this.el.nativeElement, this.addClass);
  }

  @HostListener("window:scroll", [])
    onWindowScroll() {

      let offset: number = (this.offSetToStart == -1 )? this.el.nativeElement.offsetHeight:this.offSetToStart;
      this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      if (this.selectedOffset === 0) {
        this.selectedOffset = offset;
      }

      if (this.sticked === false) {
        this.selectedOffset = offset;
      }

      if ((this.windowOffsetTop + this.offSet) > this.selectedOffset) {        
        this.addSticky();
      } else {
        this.removeSticky();
      }
    }
}
