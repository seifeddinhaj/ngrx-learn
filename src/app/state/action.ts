import { createAction, props, createActionGroup, emptyProps} from "@ngrx/store";
import { User } from "../models/user";
import { HttpErrorResponse } from "@angular/common/http";


// export const initAction = createAction('[ROOT] Init app')
// export const changeUserName = createAction('[ROOT] change User Name', props<{username: string}>())

// export const changeIsAdmin = createAction('[ROOT] change is Admin User', props<{username: string}>())

export const RootActions = createActionGroup({
    source: 'ROOT',
    events:{
        'Init app': emptyProps(),
        'change User Name': props<{username: string}>(),
        'change is Admin User': props<{username: string}>()

    }
});

export const loadUsers = createAction('[Users Api] load users')

export const loadUsersSuccess = createAction('[Users Api] load users success', props<{users: User[ ]}>());
export const loadUsersFailure = createAction('[Users Api] load users failure', props<{error: HttpErrorResponse | Error}>());