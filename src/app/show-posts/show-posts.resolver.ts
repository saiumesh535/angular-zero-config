import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserModuleState } from '../ngrx-store/reducers';
import { GetPosts } from './show-posts.actions';

@Injectable()
export class ShowPostsResolver implements Resolve<void> {
  constructor(private store: Store<UserModuleState>) {}
  public resolve(): void {
    this.store.dispatch(new GetPosts());
  }
}
