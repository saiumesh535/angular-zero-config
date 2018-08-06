import { Action, createSelector } from '@ngrx/store';
import { Content } from './content.reducer';

export enum ContentActionType {
  AddCode = '[content] addcode',
}

export class ContentAddCodeAction implements Action {
  readonly type = ContentActionType.AddCode;
  constructor(public payload: Content ) {}
}

export type contentActions = ContentAddCodeAction;

