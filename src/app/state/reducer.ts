import { ActionReducer, createReducer, MetaReducer, on } from '@ngrx/store';
import { initAction } from './action';

const initialState = {
  appName: 'ngrx',
  user:{
    username:'',
    isAdmin: false
  }
};

function log(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const currenState = reducer(state, action)
    console.log('Action', action)

    console.log('etat précedent', state)
    console.log('etat suivant', currenState)
    return currenState
  };
}
export const metaReducers: MetaReducer[] = [log];
export const rootReducer = createReducer(initialState,
  on(initAction, (state) => {
    return{
      ...state,
      user: {
        ...state.user,
        isAdmin: true
      }
    }
  }));
