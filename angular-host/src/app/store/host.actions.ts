import {createActionGroup, props} from "@ngrx/store";

export const HostAction = createActionGroup({
    source: 'host',
    events: {
        'Add': props<{counter: number}>(),
        'Substract': props<{counter: number}>(),
    }
})