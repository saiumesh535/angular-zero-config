import { Component, OnDestroy, Output } from '@angular/core';
import { RxJsSubject } from '../services';

@Component({
  selector: 'app-filter-posts',
  templateUrl: './filter-posts.component.html',
  styleUrls: ['./filter-posts.component.css']
})
export class FilterPostsComponent extends RxJsSubject<string> implements OnDestroy {

  @Output() public filterChange;

  constructor() {
    super();
    this.filterChange = this.subjectSub;
  }

  public ngOnDestroy(): void {
    this.filterChange.next();
    this.filterChange.complete();
  }

}
