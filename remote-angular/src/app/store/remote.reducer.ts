import {createReducer, on} from "@ngrx/store";
import { RemoteAction} from './remote.actions';

export interface RemoteState {
  count: number;
}

export const initialState : RemoteState = {
    count: 0
}

export const remoteReducer = createReducer(
    initialState,
    on(RemoteAction.add, (state) => ({...state, count: state.count + 1})),
    on(RemoteAction.substract, (state) => ({...state, count: state.count - 1})),
)