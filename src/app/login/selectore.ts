import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './login.reducer';


export const selectAuthState = createFeatureSelector<State>('auth');

export const selectLoginPageState = createSelector(
  selectAuthState,
  (state: State) => state
);
