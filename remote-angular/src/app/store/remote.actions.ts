import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {Product} from "../model/product.model";

export const RemoteAction = createActionGroup({
    source: 'remote',
    events: {
        'Add': props<{ counter: number }>(),
        'Subtract': props<{ counter: number }>(),
        'loadProducts': emptyProps(),
        'loadProductsSuccess': props<{ products: Product[] }>(),
        'loadProductsFailure': props<{ error: string }>()
    }
});