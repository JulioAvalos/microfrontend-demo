import {Component} from '@angular/core';
import {RemoteState} from "../../store/remote.reducer";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {RemoteAction} from "../../store/remote.actions";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Product} from "../../model/product.model";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";

@Component({
    selector: 'app-remote-home',
    imports: [
        AsyncPipe,
        NgIf,
        NgForOf,
        NgxExtendedPdfViewerModule
    ],
    templateUrl: './remote-home.component.html',
    styleUrl: './remote-home.component.css'
})
export class RemoteHomeComponent {

    count$: Observable<number>;
    products$: Observable<Product[]>;
    loading$: Observable<boolean>;
    showModal = false;

    constructor(private store: Store<{ remote: RemoteState }>) {
        this.count$ = this.store.select(state => state.remote.count);
        this.products$ = this.store.select(state => state.remote.products);
        this.loading$ = this.store.select(state => state.remote.loading);
    }

    onIncrement() {
        this.store.dispatch(RemoteAction.add({counter: 1}));
    }

    onDecrement() {
        this.store.dispatch(RemoteAction.subtract({counter: 1}));
    }

    loadProducts() {
        this.store.dispatch(RemoteAction.loadProducts());
    }

    openModal() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }
}
