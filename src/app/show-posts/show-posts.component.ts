import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { UserModuleState } from '../ngrx-store/reducers';
import { Subject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { selectPosts } from './show-posts.selctors';
import { Posts } from './show-posts.reducer';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.css']
})
export class ShowPostsComponent implements OnDestroy {

  private ngUnSubScribe: Subject<void>;
  public posts: Observable<Posts[]>;
  public filteredPosts: Observable<Posts[]>;

  @Input()
  public set filterPosts(filterPosts: string) {
    this.posts.subscribe((data) => {
      if (data && filterPosts !== undefined) {
        const lolol = data.filter((lol) => lol.title.toLowerCase().includes(filterPosts.toLowerCase()));
        this.filteredPosts = of<Posts[]>(lolol);
      }
    });
  }

  constructor(private store: Store<UserModuleState>) {
    this.ngUnSubScribe = new Subject();
    this.posts = this.store.pipe(takeUntil(this.ngUnSubScribe), select(selectPosts));
    this.filteredPosts = this.posts;
  }

  public ngOnDestroy(): void  {
    this.ngUnSubScribe.next();
    this.ngUnSubScribe.complete();
  }

}
