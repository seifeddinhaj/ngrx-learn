import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from "./action"
import {  mergeMap, tap, map, catchError } from "rxjs/operators";
import { UsersService } from "../services/users.service";
import { User } from "../models/user";
import { of } from "rxjs";

@Injectable()

export class AppEffects{
loadUsers$= createEffect(() =>
this.actions$.pipe(
    tap((val)=> console.log("action:",val)),
    ofType(userActions.loadUsers),
    mergeMap(action => this.userService.getusers().pipe(
        map((users: User[]) => userActions.loadUsersSuccess({users})),
        catchError(error => of(userActions.loadUsersFailure({error: error.body.error })))
    ))
))

constructor(private actions$: Actions, private userService: UsersService ){

}
} 