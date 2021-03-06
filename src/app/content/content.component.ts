import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserModuleState } from '../ngrx-store/reducers';
import { selectCodeSnippet } from './content.selector';
import { map } from 'rxjs/operators';

import { beautifyCode } from './../utils/beautify';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public metadata: Observable<string>;

  constructor(private store: Store<UserModuleState>) {
    this.metadata = this.store.pipe(select(selectCodeSnippet)).pipe(
      map(code => beautifyCode(code))
    );
  }



}
