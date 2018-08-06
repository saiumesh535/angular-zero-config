import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Posts } from './show-posts.reducer';
import { StateKeys } from '../ngrx-store/reducers';


export const selectPostsState = createFeatureSelector<Posts[]>(StateKeys.showposts);

export const selectPosts = createSelector(
  selectPostsState,
  (state: Posts[]) => state
);
