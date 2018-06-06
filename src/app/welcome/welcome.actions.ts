import { Action, createSelector } from '@ngrx/store';
import { Welcome } from './welcome.reducer';

export enum WelcomeActionType {
  AddTopics = '[welcome] topics',
}

export class WelcomeAddTopicsAction implements Action {
  readonly type = WelcomeActionType.AddTopics;
  constructor(public payload: Welcome ) {}
}

export type welcomeActions = WelcomeAddTopicsAction;

