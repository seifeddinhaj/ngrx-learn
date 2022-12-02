import { createSelector, createFeatureSelector } from "@ngrx/store";
import { RootState, ROOT_FEATURE_KEY, State } from "./reducer";



// const selectRoot = (state: State) => state.root
const selectRoot = createFeatureSelector<RootState>(ROOT_FEATURE_KEY)
export const getUser = createSelector(selectRoot,(state:RootState)=> state.user)

export const getUsers = createSelector(selectRoot,(state:RootState)=> state.users)
export const getLoadedUsers = createSelector(selectRoot,(state:RootState)=> state.loaded)

export const getLoadedError = createSelector(selectRoot,(state:RootState)=> state.error)