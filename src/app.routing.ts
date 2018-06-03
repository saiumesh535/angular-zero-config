import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { ContentComponent } from './app/content/content.component';
import { ContentResolver } from './app/content/content.resolver';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
        children: [
          {
            path: 'content',
            component: ContentComponent,
          },
          {
            path: 'content/:metadata',
            component: ContentComponent,
            resolve: { metadata: ContentResolver }
          },
          {
            path: '**',
            component: ContentComponent,
          }
        ]
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent,
  }
];

export const router = RouterModule.forRoot(routes);
