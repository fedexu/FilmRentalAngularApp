import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[frRippleEffect]'
})
export class RippleEffectDirective {

  //CSS class

  ripple = {
    'width': '0',
    'height': '0',
    'border-radius': '50%',
    'background': 'rgba(255, 255, 255, 0.4)',
    'transform': 'scale(0)',
    'position': 'absolute',
    'opacity': '1'
  }

  rippleEffect = {
    'animation': 'rippleDrop .6s linear'
}

// @keyframes
//  rippleDrop = {
//   100% {
//     transform: scale(2);
//     opacity: 0;
//   }
// }

  constructor(private element: ElementRef) { }


  onClick(){
    // $("div").click(function (e) {
  
      setTimeout(() => { 
        //remove after effect
        $(".ripple").remove();
      }, 1000);
    
      // Setup
      var posX = $(this).offset().left,
          posY = $(this).offset().top,
          buttonWidth = $(this).width(),
          buttonHeight =  $(this).height();
      
      // Add the element
      $(this).prepend("<span class='ripple'></span>");
          
     // Make it round!
      if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
      } else {
        buttonWidth = buttonHeight; 
      }
      
      // Get the center of the element
      var x = this.element.nativeElement.pageX - posX - buttonWidth / 2;
      var y = this.element.nativeElement.pageY - posY - buttonHeight / 2;
      
      // Add the ripples CSS and start the animation
      $(".ripple").css({
        width: buttonWidth,
        height: buttonHeight,
        top: y + 'px',
        left: x + 'px'
      }).addClass("rippleEffect");
    // });
  }
  
}
