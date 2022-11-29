import { createAction, props } from "@ngrx/store";
import { User } from "../models/user";
import { HttpErrorResponse } from "@angular/common/http";


export const initAction = createAction('init app')
export const changeUserName = createAction('change User Name', props<{username: string}>())

export const changeIsAdmin = createAction('change is Admin User ', props<{username: string}>())

export const loadUsers = createAction('[Users Api] load users')

export const loadUsersSuccess = createAction('[Users Api] load users success', props<{users: User[ ]}>());
export const loadUsersFailure = createAction('[Users Api] load users failure', props<{error: HttpErrorResponse | Error}>());