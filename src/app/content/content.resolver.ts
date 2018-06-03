import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentResolver implements Resolve<string> {
  constructor() {}
  public resolve(route: ActivatedRouteSnapshot): string {
    return `Hey! ${route.params.metadata}`;
  }
}

