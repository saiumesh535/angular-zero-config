import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import * as firebase from '../firebase';
import { UserModuleState } from '../ngrx-store/reducers';
import { ContentAddCodeAction } from './content.actions';
import { FirebaseService } from '../firebase';
@Injectable()
export class ContentResolver implements Resolve<void> {
  constructor(
    private store: Store<UserModuleState>,
    private db: AngularFirestore,
    private firebaseService: FirebaseService
  ) { }

  public resolve(route: ActivatedRouteSnapshot): void {
    this.firebaseService.getContent(route.params.metadata).subscribe((data: firebase.IMetadata[]) => {
      return this.store.dispatch(new ContentAddCodeAction({ code: data[0].code }));
    });
  }
}

