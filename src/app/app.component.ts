import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
// import { changeUserName, initAction } from './state/action';
import { State } from './state/reducer';
import { getUser } from './state/selectors';

import  {loadUsers, RootActions} from './state/action'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'starter';
  public user: Observable <User> = {} as any as Observable <User>;
  constructor(private store: Store<State>, private http: HttpClient) {}
  ngOnInit(): void {
    this.store.dispatch(RootActions.initApp());
    // this.user$ = this.store.select((state:User) =>state.root.user)
    this.user = this.store.pipe(select(getUser))
    this.http.get('api/users').subscribe((val)=>console.log(val))
  }
  changeUserName(): void {
    this.store.dispatch(RootActions.changeUserName({username: 'ffff' + Math.random()}))
  }

  loadUsers(): void{
    this.store.dispatch(loadUsers())
  }
}
 