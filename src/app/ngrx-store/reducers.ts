import * as navReducers from '../navigation/navigation.reducer';
import * as welcomeReducer from '../welcome/welcome.reducer';
import * as authData from '../login/login.reducer';
import * as contentReducer from '../content/content.reducer';
import * as ShowPostsReducer from '../show-posts/show-posts.reducer';

export enum StateKeys {
  nav = 'nav',
  auth = 'auth',
  welcome = 'welcome',
  content = 'content',
  showposts = 'showposts',
}

export interface UserModuleState {
  nav: navReducers.NavigationState;
  auth: authData.State;
  [StateKeys.welcome]: welcomeReducer.Welcome;
  content: contentReducer.Content;
  showposts: ShowPostsReducer.Posts;

}


export const reducers = {
  nav: navReducers.reducer,
  auth: authData.reducer,
  welcome: welcomeReducer.reducer,
  content: contentReducer.reducer,
  showposts: ShowPostsReducer.reducer,
};




