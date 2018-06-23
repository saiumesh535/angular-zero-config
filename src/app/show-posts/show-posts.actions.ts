import { Action, createSelector } from '@ngrx/store';
import { Posts } from './show-posts.reducer';

export enum ShowPosts {
  AddPosts = '[showposts] add',
  GetPosts = '[showposts] get',
}

/* this is for add ing posts to state */
export class ShowPostsAdd implements Action {
  readonly type = ShowPosts.AddPosts;
  constructor(public payload: Posts ) {}
}

/* effect for making http call */
export class GetPosts implements Action {
  readonly type = ShowPosts.GetPosts;
  constructor() {}
}

export type ShowPostsActions = ShowPostsAdd | GetPosts;

