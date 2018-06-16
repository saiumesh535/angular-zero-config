import * as navReducers from '../navigation/navigation.reducer';
import * as welcomeReducer from '../welcome/welcome.reducer';
import * as authData from '../login/login.reducer';
import * as contentReducer from '../content/content.reducer';

export enum StateKeys {
  nav = 'nav',
  auth = 'auth',
  welcome = 'welcome',
  content = 'content',
}

export interface UserModuleState {
  nav: navReducers.NavigationState;
  auth: authData.State;
  [StateKeys.welcome]: welcomeReducer.Welcome;
  content: contentReducer.Content;
}


export const reducers = {
  nav: navReducers.reducer,
  auth: authData.reducer,
  welcome: welcomeReducer.reducer,
  content: contentReducer.reducer,
};




