import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {remoteReducer} from "./store/remote.reducer";
import {Actions, EffectsRootModule, provideEffects} from "@ngrx/effects";
import {RemoteEffect} from "./store/remote.effects";

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideStore({remote: remoteReducer}),
        provideEffects([RemoteEffect]), // Only this line is needed for effects
        provideStoreDevtools({logOnly: false, connectInZone: true}) // Critical for Zone.js compatibility
    ]
};
