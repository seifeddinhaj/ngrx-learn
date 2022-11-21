import { ActionReducer, createReducer, MetaReducer } from '@ngrx/store';

const initialState = {
  appName: 'ngrx',
};

function log(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const currenState = reducer(state, action)
    console.log('etat précedent', state)
    console.log('etat suivant', currenState)
    return currenState
  };
}
export const metaReducers: MetaReducer[] = [log];
export const rootReducer = createReducer(initialState);
