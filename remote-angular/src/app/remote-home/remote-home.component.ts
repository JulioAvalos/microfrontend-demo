import { Component } from '@angular/core';
import {RemoteState} from "../store/remote.reducer";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {RemoteAction} from "../store/remote.actions";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-remote-home',
  imports: [
    AsyncPipe
  ],
  templateUrl: './remote-home.component.html',
  styleUrl: './remote-home.component.css'
})
export class RemoteHomeComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ remote: RemoteState }>) {
    this.count$ = this.store.select(state => state.remote.count);
  }

  onIncrement() {
    this.store.dispatch(RemoteAction.add({counter: 1}));
  }

  onDecrement() {
    this.store.dispatch(RemoteAction.substract({counter: 1}));
  }
}
