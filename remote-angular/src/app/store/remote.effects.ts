import {Injectable, inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {exhaustMap, of, tap} from 'rxjs';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {RemoteAction} from "./remote.actions";
import {ProductService} from "../services/product.service";

@Injectable()
export class RemoteEffect {
    private actions$ = inject(Actions);
    private productsService = inject(ProductService);

    private allActions$ = this.actions$.pipe(
        tap(action => console.log('📢 Action Dispatched:', action.type))
    );

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(RemoteAction.loadProducts), // Must match the action group
            exhaustMap(() =>
                this.productsService.getProducts().pipe(
                    map(products => RemoteAction.loadProductsSuccess({products})),
                    catchError(error => of(RemoteAction.loadProductsFailure({error: error.message})))
                )
            )
        )
    );

}