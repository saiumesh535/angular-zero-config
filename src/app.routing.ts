import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { ContentComponent } from './app/content/content.component';
import { ContentResolver } from './app/content/content.resolver';
import { WelcomeResolver } from './app/welcome/welcome.resolver';
import { AdminComponent } from './app/admin/admin.component';
import { CreatepostComponent } from './app/createpost/createpost.component';
import { AdminAuthGuard } from './app/admin/admin-auth-guard';
import { HomeComponent } from './app/home/home.component';

const routes: Routes = [
  {
    path: '',
    // component: LoginComponent,
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ AdminAuthGuard ],
    children: [
      {
        path: '',
        component: CreatepostComponent,
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
        resolve: { metadata: WelcomeResolver },
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
            redirectTo: '',
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

export const router = RouterModule.forRoot(routes);
