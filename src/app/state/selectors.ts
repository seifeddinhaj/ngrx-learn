import { createSelector, createFeatureSelector } from "@ngrx/store";
import { RootState, State } from "./reducer";



// const selectRoot = (state: State) => state.root
const selectRoot = createFeatureSelector<RootState>('root')
export const getUser = createSelector(selectRoot,(state:RootState)=> state.user)