import { createAction, props } from "@ngrx/store";

export const initAction = createAction('init app')
export const changeUserName = createAction('change User Name', props<{username: string}>())