import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { UserModuleState } from '../ngrx-store/reducers';
import { WelcomeAddTopicsAction } from './welcome.actions';
import { FirebaseService, ITopics } from '../firebase';

@Injectable()
export class WelcomeResolver implements Resolve<void> {
  constructor(private store: Store<UserModuleState>,
    private firebaseService: FirebaseService,
  ) {}
  public resolve(): void {
    this.firebaseService.getTopics().subscribe((data: ITopics[]) => {
      return this.store.dispatch(new WelcomeAddTopicsAction({ topics: data.map(topic => topic.name) }));
    }, (error) => {
      return this.store.dispatch(new WelcomeAddTopicsAction({ topics: [] }));
    });
  }
}
