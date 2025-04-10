import {hostReducer} from "./store/host.reducer";
import {loadRemoteModule} from "@angular-architects/native-federation";
import {withTimeout} from "./helpers/timeout.helper";
import {fallbackRemoteReducers} from "./helpers/fallback-remote.reducer";
import {fallbackRemoteEffects} from "./helpers/fallback-remote.effects";

// This function loads the remote reducer and combines it with the host reducer.
export async function loadCombinedReducers(): Promise<Record<string, any>> {
  try {
      // Load the remote module that exposes the store.
     const remoteModule = await withTimeout(
      loadRemoteModule('remoteAngular', './Store'),
      3000,  // timeout in milliseconds
      // Fallback value: in this case, our fallback reducers
      { remoteReducers: fallbackRemoteReducers }
    );

    console.log('Remote module loaded:', remoteModule);
    // Combine the host reducer with the remote reducer
    return {
      host: hostReducer,
      remote: remoteModule.remoteReducers.remote, // Ensure your remote export uses this key.
    };
  }  catch (error) {
    console.error('Error loading combined reducers:', error);
    // If any unexpected error occurs, fallback.
    return {
      host: hostReducer,
      remote: fallbackRemoteReducers.remote,
    };
  }
}


export async function loadCombinedStoreConfig(): Promise<{
  reducers: Record<string, any>;
  effects: any[];
}> {
  try {
    // Load the remote module with a timeout of 2000ms.
    const remoteModule = await withTimeout(
      loadRemoteModule('remoteAngular', './Store'),
      2000,
      {
        remoteReducers: fallbackRemoteReducers,
        remoteEffects: fallbackRemoteEffects
      }
    );
    console.log('Remote module loaded:', remoteModule);

    // Combine host reducer with remote reducer.
    const combinedReducers = {
      host: hostReducer,
      remote: remoteModule.remoteReducers.remote, // reducer defined for remote
    };

    // Extract remote effects from the loaded module; use fallback if unavailable.
    const combinedEffects = remoteModule.RemoteEffect || [];
    return {
      reducers: combinedReducers,
      effects: combinedEffects,
    };
  } catch (error) {
    console.error('Error loading remote store config; using fallbacks:', error);
    return {
      reducers: {
        host: hostReducer,
        remote: fallbackRemoteReducers.remote, // Ensure fallback key matches!
      },
      effects: fallbackRemoteEffects || []
    };
  }
}