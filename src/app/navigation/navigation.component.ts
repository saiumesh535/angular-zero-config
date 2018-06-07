import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, of, BehaviorSubject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { UserModuleState } from '../ngrx-store/reducers';
import { RxJsSubject } from '../services';
import { takeUntil } from 'rxjs/operators';
import { selectTopicsFromState } from '../welcome/welcome.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {

  public topics$: BehaviorSubject<string[]>;
  private topics: string[];
  private ngUnSubScribe: Subject<void>;

  constructor(private router: Router, private store: Store<UserModuleState>) {
    this.ngUnSubScribe = new Subject();
    this.ngUnSubScribe = new Subject();
    this.topics$ = new BehaviorSubject([]);
    this.store.pipe(
      select(selectTopicsFromState),
      takeUntil(this.ngUnSubScribe),
    ).subscribe(lol => {
      this.topics = lol;
      this.topics$.next(lol);
    });
  }

  public ngOnDestroy(): void {
    this.ngUnSubScribe.next();
    this.ngUnSubScribe.complete();
  }

  public onUpdate(lol: number): void {
    this.router.navigate([`/dashboard/content/${lol}`]);
  }


  public onInputChange(inputData: string): void {
    this.topics$.next(this.topics.filter(topic => topic.toLocaleLowerCase()
    .includes(inputData.toLocaleLowerCase())));
  }
}
