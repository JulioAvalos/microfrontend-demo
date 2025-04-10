import {createReducer, on} from "@ngrx/store";
import { HostAction } from './host.actions';

export interface HostState {
  count: number;
}

export const initialState : HostState = {
    count: 0
}

export const hostReducer = createReducer(
    initialState,
    on(HostAction.add, (state) => ({...state, count: state.count + 1})),
    on(HostAction.substract, (state) => ({...state, count: state.count - 1})),
)