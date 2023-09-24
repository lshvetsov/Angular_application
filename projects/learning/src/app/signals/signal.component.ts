import { NgFor } from '@angular/common';
import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'app-signals',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubledCounter = computed(()=>this.counter() * 2);

  constructor() {
    effect(()=> console.log(this.doubledCounter()))
  }

  increment() {
    this.counter.update(old=>++old);
    this.actions.mutate(old=>old.push('INCREMENT'))
  }

  decrement() {
    this.counter.set(this.counter() - 1);
    this.actions.mutate(old=>old.push('DECREMENT'))
  }
}
