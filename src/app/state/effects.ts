import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from "./action"
import {  mergeMap, tap, map } from "rxjs/operators";
import { UsersService } from "../services/users.service";
import { User } from "../models/user";

@Injectable()

export class AppEffects{
loadUsers$= createEffect(() =>
this.actions$.pipe(
    tap((val)=> console.log("action:",val)),
    ofType(userActions.loadUsers),
    mergeMap(action => this.userService.getusers().pipe(
        map((users: User[]) => userActions.loadUsersSuccess({users}))
    ))
))

constructor(private actions$: Actions, private userService: UsersService ){

}
} 