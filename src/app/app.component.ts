import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
// import { changeUserName, initAction } from './state/action';
import { State } from './state/reducer';
import { getLoadedError, getLoadedUsers, getUser, getUsers } from './state/selectors';

import  {loadUsers, RootActions} from './state/action'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'starter';
  public user: Observable <User> = {} as any as Observable <User>;
  public users$!: Observable <User[]>
  public isLoaded$: Observable<boolean>
  public errorMessage: Observable<HttpErrorResponse | Error | string>
  constructor(private store: Store<State>, private http: HttpClient) {}
  ngOnInit(): void {
    this.store.dispatch(RootActions.initApp());
    // this.user$ = this.store.select((state:User) =>state.root.user)
    this.user = this.store.pipe(select(getUser))
    this.users$ = this.store.pipe(select(getUsers))
    this.isLoaded$ = this.store.pipe(select(getLoadedUsers))
    this.errorMessage = this.store.pipe(select(getLoadedError))
  }
  changeUserName(): void {
    this.store.dispatch(RootActions.changeUserName({username: 'ffff' + Math.random()}))
  }

  loadUsers(): void{
    this.store.dispatch(loadUsers())
  }
}
 