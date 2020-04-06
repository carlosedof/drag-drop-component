import { animate, query, style, transition, trigger } from '@angular/animations';

export const fadeInSelf = trigger('fadeInSelf', [
  transition(':enter', [
    query(':self', [style({ opacity: 0 })], { optional: true }),
    query(':self', [animate('0.4s', style({ opacity: 1 }))], { optional: true })
  ])
]);

export const fadeInSelfFast = trigger('fadeInSelfFast', [
  transition(':enter', [
    query(':self', [style({ opacity: 0 })], { optional: true }),
    query(':self', [animate('0.2s', style({ opacity: 1 }))], { optional: true })
  ])
]);

export const fadeOutSelf = trigger('fadeOutSelf', [
  transition(':leave', [
    query(':self', [style({ opacity: 1 })], { optional: true }),
    query(':self', [animate('0.4s', style({ opacity: 0 }))], { optional: true })
  ])
]);
