import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
    state('normal', style({
      'background-color': 'green',
      transform: 'translateX(0)'
    })),
    state('high', style({
      'background-color': 'yellow',
      transform: 'translateX(100px)'
    })),
    transition("high <=> normal", animate(600))
  ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(1)'
      })),
      state('high', style({
        'background-color': 'yellow',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'red',
        transform: 'translateX(0px) scale(0.5)'
      })),
      transition('normal => high', animate(300)),
      transition('high => normal', animate(600)),
      transition('shrunken <=> *', [
        style({'background-color': 'orange'}),
        animate(1000, style({'borderRadius': '50px'})),
        animate(500)
      ])
    ]),
    trigger('list', [
      state('list', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-100px)'}),
        animate(300)]),
      transition('* => void', [
        animate(300, style({ opacity: 0, transform: 'translateX(100px)'}))])
    ])
  ]
})
export class AppComponent {
  state = 'normal'
  wildState = 'normal'
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }
    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
    onAnimate(){
      this.state == 'normal' ? this.state = 'high' : this.state = 'normal';
      this.wildState == 'normal' ? this.wildState = 'high' : this.wildState = 'normal';
    }
    onShrunken() {
      this.wildState = 'shrunken'
    }
}
