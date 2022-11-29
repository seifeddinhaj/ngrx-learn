import { Action, ActionReducer, createReducer, MetaReducer, on, props } from '@ngrx/store';
import { User } from '../models/user';
import { changeUserName, initAction } from './action';


export const ROOT_FEATURE_KEY = 'root'
export interface State {
  readonly [ROOT_FEATURE_KEY]:RootState
}

export interface RootState{
  appName:string;
  user:User;
  users ?:User[]
}
const initialState: RootState = {
  appName: 'ngrx',
  user:{
    username:'',
    isAdmin: false
  }
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
  on(initAction, (state:RootState) => {
    return{
      ...state,
      user: {
        ...state.user,
        isAdmin: true
      }
    }
  }),
  on(changeUserName, (state:RootState,props) => {
    return{
      ...state,
      user: {
        ...state.user,
        username: props.username
      }
    }
  })
  );
