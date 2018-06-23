import { Injectable } from '@angular/core';
import { map, switchMap, exhaustMap } from 'rxjs/operators';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';

import { ShowPosts, ShowPostsAdd, GetPosts } from './show-posts.actions';
import { Posts } from './show-posts.reducer';
import { UserModuleState } from '../ngrx-store/reducers';
import { HttpService } from '../services/httpService';

@Injectable()
export class ShowPostsEffect {

  constructor(
    private actions$: Actions,
    private httpService: HttpService,
    private http: HttpClient,
    private store: Store<UserModuleState>) { }

  /* listen for some actions */
  @Effect({ dispatch: false })
  getPostsAction$ = this.actions$.pipe(
    ofType(ShowPosts.GetPosts),
    exhaustMap(() =>
      this.httpService.getPosts().pipe(
        map((data: Posts) => this.store.dispatch(new ShowPostsAdd(data)))
      )
    )
  );
}
