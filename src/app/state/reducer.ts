import { HttpErrorResponse } from '@angular/common/http';
import { Action, ActionReducer, createReducer, MetaReducer, on, props } from '@ngrx/store';
import { User } from '../models/user';
// import { changeUserName, initAction } from './action';
import { loadUsers, loadUsersFailure, loadUsersSuccess, RootActions } from './action';



export const ROOT_FEATURE_KEY = 'root'
export interface State {
  readonly [ROOT_FEATURE_KEY]:RootState
}

export interface RootState{
  appName:string;
  user:User;
  users:User[];
  loaded?: boolean;
  error?:HttpErrorResponse | Error | string;

}
const initialState: RootState = {
  appName: 'ngrx',
  user:{
    username:'',
    isAdmin: false
  },
  users: [],
  error: null
  
};

function log(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const currenState = reducer(state, action)
    console.groupCollapsed( action.type)

    console.log('etat précedent', state)
    console.log('Action', action)

    console.log('etat suivant', currenState)
    console.groupEnd()

    return currenState
  };
}
export const metaReducers: MetaReducer[] = [log];
export const rootReducer = createReducer<RootState,Action>(initialState,
  on(RootActions.initApp, (state:RootState) => {
    return{
      ...state,
      user: {
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(RootActions.changeUserName, (state:RootState,props) => {
    return{
      ...state,
      user: {
        ...state.user,
        username: props.username
      }
    }
  }),
  on(loadUsers, (state: RootState)=>{
    return{
      ...state,
      loaded: false

    }
  }),
  on(loadUsersSuccess, (state: RootState, props)=>{
    return{
      ...state,
      users: props.users,
      loaded: true
    }
  }),
  on(loadUsersFailure, (state: RootState, props)=>{
    return{
      ...state,
      users: [],
      loaded: true,
      error: props.error
    }
  })

  );
