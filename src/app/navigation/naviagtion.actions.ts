import { Action } from '@ngrx/store';
import { NavigationState } from './navigation.reducer';

export enum NavActonType {
  Change = '[NAV] Change',
}


export class NavActionChnage implements Action {
  readonly type = NavActonType.Change;
  constructor(public payload: NavigationState ) {}
}



export type AuthActions = NavActionChnage;

