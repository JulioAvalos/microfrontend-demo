import {createActionGroup, props} from "@ngrx/store";

export const RemoteAction = createActionGroup({
    source: 'remote',
    events: {
        'Add': props<{counter: number}>(),
        'Substract': props<{counter: number}>(),
    }
})