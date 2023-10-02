import {createAction, props} from "@ngrx/store";

export const INCREMENT = '[counter] increment';
export const DECREMENT = '[counter] decrement';
export const INIT = '[counter] init';
export const SET = '[counter] set';

export const init = createAction(INIT);
export const set = createAction(
  SET,
  props<{value: number}>()
)
export const increment = createAction(
  INCREMENT,
  props<{value: number}>()
)
export const decrement = createAction(
  DECREMENT,
  props<{value: number}>()
)


// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT;
//
//   constructor(public value: number) {}
// }
//
// export type CounterAction = IncrementAction;
