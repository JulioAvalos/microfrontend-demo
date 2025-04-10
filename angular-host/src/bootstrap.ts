import { bootstrapApplication } from '@angular/platform-browser';
import { loadCombinedReducers} from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideZoneChangeDetection} from "@angular/core";
import {provideRouter} from "@angular/router";
import {HOST_ROUTES} from "./app/app.routes";
import {provideStore} from "@ngrx/store";
import {provideStoreDevtools} from "@ngrx/store-devtools";

async function bootstrapApp() {
  try {
    // Wait to load the remote reducer and combine it with the host reducer.
    const combinedReducers = await loadCombinedReducers();
    console.log('Combined reducers:', combinedReducers);

    // Now bootstrap your application with the combined reducer map.
    await bootstrapApplication(AppComponent, {
      providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(HOST_ROUTES),
        // Pass the combined reducers as your root store.
        provideStore(combinedReducers),
        provideStoreDevtools({ logOnly: false }),
      ],
    });
  } catch (error) {
    console.error('Error during bootstrap:', error);
  }
}

// Start the bootstrap process.
bootstrapApp();