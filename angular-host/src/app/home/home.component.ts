import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {HostState} from "../store/host.reducer";
import {Observable} from "rxjs";
import {HostAction} from "../store/host.actions";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-home',
  imports: [
    AsyncPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  count$: Observable<number>;

  constructor(private store: Store<{ host: HostState }>) {
    this.count$ = this.store.select(state => state.host.count);
  }

  onIncrement() {
    this.store.dispatch(HostAction.add({counter: 1}));
  }

  onDecrement() {
    this.store.dispatch(HostAction.substract({counter: 1}));
  }
}
