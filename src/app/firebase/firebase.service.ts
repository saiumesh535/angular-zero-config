import { AngularFirestore } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { collections, ITopics, IMetadata } from './collections';

@Injectable({
    providedIn: 'root'
})
export class FirebaseService {
    constructor(private db: AngularFirestore) { }

    public getTopics(): Observable<ITopics[]> {
        return this.db.collection<ITopics>(collections.topics).snapshotChanges().pipe(
            map(actions => actions.map(a => a.payload.doc.data()))
        );
    }

    /**
     * @param topic this takes topic name to get metadata
     */
    public getContent(topic: string): Observable<IMetadata[]> {
        return this.db.collection<IMetadata>(topic).snapshotChanges().pipe(
            map(actions => actions.map(a => a.payload.doc.data()))
        );
    }

    public postTopic(topic) {
        this.db.collection<ITopics>(topic).add({ name: topic });
    }
}
