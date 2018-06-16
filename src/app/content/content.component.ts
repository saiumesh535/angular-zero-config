import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as beautify from 'js-beautify';

import { UserModuleState } from '../ngrx-store/reducers';
import { selectCodeSnippet } from './content.selector';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public metadata: Observable<string>;

  constructor(private store: Store<UserModuleState>) {
    this.metadata = this.store.pipe(select(selectCodeSnippet)).pipe(
      map(code => this.beautifyCode(code))
    );
  }

  private beautifyCode(code: string): string {
    let result = '';
    try {
      if (code.length > 10) {
        code.split('<code>').forEach((data) => {
            const lol = '<code>' + data;
            result = result + lol.replace(new RegExp(/<code>[\s\S]*?<\/code>/, 'g'),
            `<code>${beautify(lol.split('<code>')[1].split('</code>')[0])}</code>`
            );
        });
        return result;
      }
      return code;
    } catch (err) {
      console.error(err);
      return code;
    }
  }

}
