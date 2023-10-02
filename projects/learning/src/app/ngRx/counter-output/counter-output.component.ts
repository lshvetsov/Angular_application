import { Component } from '@angular/core';
import {Observable } from 'rxjs';

import {Store} from "@ngrx/store";
import {selectCount, selectDoubleCount} from "../counter-store/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {

  counter$: Observable<number>;
  doubleCounter$: Observable<number>;

  constructor(private store: Store<{counter:number}>) {
    this.counter$ = store.select(selectCount);
    this.doubleCounter$ = store.select(selectDoubleCount);
  }


}
