import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {remoteReducer} from "./store/remote.reducer";
import {provideEffects} from "@ngrx/effects";
import {RemoteEffect} from "./store/remote.effects";
import {provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(),
        provideZoneChangeDetection({eventCoalescing: true}),
        provideRouter(routes),
        provideAnimationsAsync(),
        provideStore({remote: remoteReducer}),
        provideEffects([RemoteEffect]), // Only this line is needed for effects
        provideStoreDevtools({logOnly: false, connectInZone: true}) // Critical for Zone.js compatibility
    ]
};
