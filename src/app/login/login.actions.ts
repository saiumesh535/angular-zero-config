import { Action, createSelector } from '@ngrx/store';
import { State } from './login.reducer';

export enum LoginActionType {
  Login = '[Auth] Login',
}


export class LoginAction implements Action {
  readonly type = LoginActionType.Login;
  constructor(public payload: State ) {}
}

export type AuthActions = LoginAction;

