import {createReducer, on} from "@ngrx/store";
import {decrement, increment, set} from "./counter.actions";

const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);

// alternative
// export function counterReducer (state = initialState, action: any) {    // any or CounterAction | Action in case of not using CreateAction()
//   if (action.type === INCREMENT) {
//     return state + action.value;
//   }
//   return state;
// }
