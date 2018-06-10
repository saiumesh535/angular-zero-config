import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentResolver implements Resolve<string> {
  constructor() {}
  public resolve(route: ActivatedRouteSnapshot): string {
    if (route.params.metadata === 'routing') {
      return `
      <pre class="language-markup">
      <code>
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: LoginComponent,
  }
];
export const router = RouterModule.forRoot(routes);
      </code>
      </pre>`;
    }
    return `
    <pre class="language-javascript"><code>@Injectable()
      export class AuthGuard implements CanActivate {
          constructor(private router: Router) { }
          canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
              return false;
          }
      }</code></pre>`;
  }
}

