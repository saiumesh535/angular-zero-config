import { Action } from '@ngrx/store';
import { State } from './navigation.reducer';

export enum NavActonType {
  Change = '[NAV] Chnage',
}


export class NavActionChnage implements Action {
  readonly type = NavActonType.Change;

  constructor(public payload: State ) {}
}



export type AuthActions = | NavActionChnage;

