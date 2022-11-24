import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { changeUserName, initAction } from './state/action';
import { State } from './state/reducer';
import { getUser } from './state/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'starter';
  public user: Observable <User> = {} as any as Observable <User>;
  constructor(private store: Store<State>) {}
  ngOnInit(): void {
    this.store.dispatch(initAction());
    // this.user$ = this.store.select((state:User) =>state.root.user)
    this.user = this.store.pipe(select(getUser))
  }
  changeUserName(): void {
    this.store.dispatch(changeUserName({username: 'ffff' + Math.random()}))
  }
}
 