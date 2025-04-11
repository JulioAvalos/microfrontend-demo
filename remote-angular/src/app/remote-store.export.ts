// src/app/remote-store.export.ts
import {remoteReducer, RemoteState} from "./store/remote.reducer";
import {RemoteEffect} from './store/remote.effects';

export {RemoteAction} from './store/remote.actions';

// For feature module compatibility
export interface RemoteFeatureState {
    remote: RemoteState;
}

export const remoteReducers = {
    remote: remoteReducer,
};

export const remoteEffects = [RemoteEffect];

// Export selectors if you have them
// export * from './store/remote.selectors';