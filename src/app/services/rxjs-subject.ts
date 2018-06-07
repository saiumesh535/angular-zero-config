import { Subject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

export interface BaseRxJS {
  length: number;
}

export abstract class RxJsSubject<T extends BaseRxJS> {

  protected subject$: Subject<T>;

  constructor() {
    this.subject$ = new Subject();
  }

  protected get subjectSub (): Observable<T> {
    return  this.subject$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    );
  }

}
