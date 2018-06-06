import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Welcome } from './welcome.reducer';
import { StateKeys } from '../ngrx-store/reducers';


export const selectTopicState = createFeatureSelector<Welcome>(StateKeys.welcome);

export const selectTopicsFromState = createSelector(
  selectTopicState,
  (state: Welcome) => state.topics
);
