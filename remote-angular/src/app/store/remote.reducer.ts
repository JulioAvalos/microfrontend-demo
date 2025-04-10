import {createReducer, on} from "@ngrx/store";
import {RemoteAction} from './remote.actions';
import {Product} from "../model/product.model";

export interface RemoteState {
    count: number;
    products: Product[];
    loading: boolean;
    error: string | null;
}

export const initialState: RemoteState = {
    count: 0,
    products: [],
    loading: false,
    error: null
}

export const remoteReducer = createReducer(
    initialState,
    on(RemoteAction.add, (state) => ({...state, count: state.count + 1})),
    on(RemoteAction.subtract, (state) => ({...state, count: state.count - 1})),
    on(RemoteAction.loadProducts, state =>  ({...state, loading: true})),
    on(RemoteAction.loadProductsSuccess, (state, {products}) => ({
        ...state,
        products,
        loading: false,
        error: null
    })),
    on(RemoteAction.loadProductsFailure, (state, {error}) => ({
        ...state,
        loading: false,
        error
    }))
)