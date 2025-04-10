// src/app/remote-store.export.ts

import { remoteReducer, RemoteState } from './store/remote.reducer';

// Optionally, define an interface for the combined feature state.
// This is useful if you want to register the reducers under a feature key.
export interface RemoteFeatureState {
  // Using the key "remote" here; you can choose a different name if desired.
  remote: RemoteState;
}

// Export the aggregated reducers. If you have only one reducer, it still
// needs to be exported as an object (so it can be used in StoreModule.forFeature).
export const remoteReducers = {
  remote: remoteReducer,
};

// Optionally, you can also export any selectors or helper functions here.
