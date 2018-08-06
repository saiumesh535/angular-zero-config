import { Component, OnDestroy, Output } from '@angular/core';

import { RxJsSubject } from '../services';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent extends RxJsSubject<string> implements OnDestroy {

  public search: string;
  @Output() public inputChange;

  constructor() {
    super();
    this.inputChange = this.subjectSub;
   }

  public onSearchUpdate(): void {
    this.inputChange.next(this.search);
  }

  public ngOnDestroy(): void {
    this.inputChange.next();
    this.inputChange.complete();
  }

}
