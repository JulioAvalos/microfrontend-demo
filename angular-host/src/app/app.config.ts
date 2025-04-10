import {hostReducer} from "./store/host.reducer";
import {loadRemoteModule} from "@angular-architects/native-federation";
import {withTimeout} from "./helpers/timeout.helper";
import {fallbackRemoteReducers} from "./helpers/fallback-remote.reducer";

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

    console.log('Remote reducers loaded:', remoteModule.remoteReducers);
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
