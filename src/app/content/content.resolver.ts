import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as firebase from '../firebase';
import { UserModuleState } from '../ngrx-store/reducers';
import { ContentAddCodeAction } from './content.actions';

@Injectable()
export class ContentResolver implements Resolve<void> {
constructor(private store: Store<UserModuleState>, private db: AngularFirestore) {}
  public resolve(route: ActivatedRouteSnapshot): void {
    this.db.collection(route.params.metadata).snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data()))
    ).subscribe((data: firebase.IMetadata[]) => {
       return this.store.dispatch(new ContentAddCodeAction({ code: data[0].code }));
    });
  }
}

