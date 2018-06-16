import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { UserModuleState } from '../ngrx-store/reducers';
import { WelcomeAddTopicsAction } from './welcome.actions';
import * as firebase from '../firebase';

@Injectable()
export class WelcomeResolver implements Resolve<void> {
  constructor(private store: Store<UserModuleState>, private db: AngularFirestore) {}
  public resolve(): void {
    this.db.collection(firebase.collections.topics).snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    ).subscribe((data: firebase.ITopics[]) => {
       return this.store.dispatch(new WelcomeAddTopicsAction({ topics: data.map(topic => topic.name) }));
    }, (error) => {
      return this.store.dispatch(new WelcomeAddTopicsAction({ topics: [] }));
    });
  }
}
