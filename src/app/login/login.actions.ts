import { Action, createSelector } from '@ngrx/store';
import { State } from './login.reducer';

export enum LoginActionType {
  Login = '[Auth] Login',
  LoginEffect = '[Auth] loginEffect',
}

export class LoginAction implements Action {
  readonly type = LoginActionType.Login;
  constructor(public payload: State ) {}
}

export class LoginEffect implements Action {
  readonly type = LoginActionType.LoginEffect;
  constructor(public payload: State ) {}
}

export type AuthActions = LoginAction | LoginEffect;

