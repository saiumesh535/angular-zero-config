import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Content } from './content.reducer';
import { StateKeys } from '../ngrx-store/reducers';


export const selectContentState = createFeatureSelector<Content>(StateKeys[StateKeys.content]);

export const selectCodeSnippet = createSelector(
  selectContentState,
  (state: Content) => state.code
);
