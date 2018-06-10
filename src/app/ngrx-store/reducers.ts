import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../login/login.reducer';
import * as navReducers from '../navigation/navigation.reducer';
import * as welcomeReducer from '../welcome/welcome.reducer';
import * as authData from '../login/login.reducer';

export enum StateKeys {
  nav = 'nav',
  auth = 'auth',
  welcome = 'welcome'
}

export interface UserModuleState {
  nav: navReducers.NavigationState;
  auth: authData.State;
  [StateKeys.welcome]: welcomeReducer.Welcome;
}


export const reducers = {
  nav: navReducers.reducer,
  auth: authData.reducer,
  welcome: welcomeReducer.reducer,
};




