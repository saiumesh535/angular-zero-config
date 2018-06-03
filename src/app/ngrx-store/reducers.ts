import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../login/login.reducer';
import * as navReducers from '../navigation/navigation.reducer';
import * as authData from '../login/login.reducer';

export interface UserModuleState {
  nav: navReducers.State;
  auth: authData.State;
}


export const reducers = {
  nav: navReducers.reducer,
  auth: authData.reducer,
};




