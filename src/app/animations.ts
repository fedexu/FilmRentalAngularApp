import { animate, state, style, transition, trigger, query, group } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ]);

export function slideToLeftTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('slideToLeftTransition', [
    state('void', style({ position: 'fixed', width: '100%' })),
    state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [  // before 2.1: transition('void => *', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [  // before 2.1: transition('* => void', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);
}

export function fadeInOutTransition() {
  return fadeInOut();
}

function fadeInOut() {
  return trigger('fadeInOutTransition', [
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(350)
    ]),
    transition(':leave', [
      group([
        animate('0.2s ease', style({
          transform: 'translate(150px,25px)'
        })),
        animate('0.5s 0.2s ease', style({
          opacity: 0
        }))
      ])
    ])
  ]);
}