import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { LoginActionType, LoginEffect } from './login.actions';
import { State } from './login.reducer';

@Injectable()
export class LoginEffetcs {

  constructor(private actions$: Actions) { }

  /* listen for some actions */
  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$.pipe(
    ofType(LoginActionType.LoginEffect),
    map((action: LoginEffect) => action.payload),
    tap((data) => console.log('Hola!!', data)
  ));
}
