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
