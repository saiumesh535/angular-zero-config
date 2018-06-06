import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModuleState } from '../ngrx-store/reducers';
import { Store } from '@ngrx/store';
import { WelcomeAddTopicsAction } from './welcome.actions';

@Injectable()
export class WelcomeResolver implements Resolve<void> {
  constructor(private store: Store<UserModuleState>) {}
  public resolve(route: ActivatedRouteSnapshot): void {
    return this.store.dispatch(new WelcomeAddTopicsAction({ topics: ['Guards', 'Routing'] }));
  }
}

