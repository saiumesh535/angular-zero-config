import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { UserModuleState } from '../ngrx-store/reducers';
import { selectTopicsFromState } from '../welcome/welcome.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  public topics$: BehaviorSubject<string[]>;
  public search = '';

  private topics: string[];
  private filter$: BehaviorSubject<string>;
  private ngUnSubScribe: Subject<void>;

  constructor(private router: Router, private store: Store<UserModuleState>) {
    this.ngUnSubScribe = new Subject();
    this.topics$ = new BehaviorSubject([]);
    this.filter$ = new BehaviorSubject('');
    this.store.pipe(
      select(selectTopicsFromState),
      takeUntil(this.ngUnSubScribe),
    ).subscribe(lol => {
      this.topics = lol;
      this.topics$.next(lol);
    });

    this.filter$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.ngUnSubScribe),
    ).subscribe(search => this.topics$.next(this.topics.filter(topic => topic.toLocaleLowerCase()
      .includes(this.search.toLocaleLowerCase()))));

  }

  ngOnInit() {
  }

  public ngOnDestroy(): void {
    this.ngUnSubScribe.next();
    this.ngUnSubScribe.complete();
  }

  public onUpdate(lol: number): void {
    this.router.navigate([`/dashboard/content/${lol}`]);
  }

  public onSearchUpdate(): void {
    this.filter$.next(this.search);
  }

}
