import { LoginAction, LoginActionType } from './login.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface User {
  username: string;
}

export interface State {
  login: boolean;
  user: User | null;
}

export const initialState: State = {
  login: false,
  user: null,
};


export function reducer(state = initialState, action: LoginAction): State {
  switch (action.type) {
    case LoginActionType.Login:
      return {
        ...state, ...action.payload
      };
    default: {
      return state;
    }
  }
}
