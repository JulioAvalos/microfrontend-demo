// fallback-remote.reducer.ts

export interface FallbackRemoteState {
  status: string;
  message: string;
}

export const fallbackRemoteState: FallbackRemoteState = {
  status: 'FAILED_TO_LOAD_REMOTE_STORE',
  message: 'The remote store failed to load. Using fallback state.',
};

export function fallbackRemoteReducer(
  state = fallbackRemoteState,
  action: any
): FallbackRemoteState {
  // Since this is a fallback reducer, it simply returns the current state.
  // You can also handle specific actions here if needed.
  return state;
}

// Exporting the fallback reducer in an object to maintain consistency
// with the structure expected when loading remote reducers dynamically.
export const fallbackRemoteReducers = {
  remote: fallbackRemoteReducer,
};
