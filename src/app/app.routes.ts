import { Routes } from '@angular/router';
import {LoginPage} from './pages/login-page/login-page';
import {TasksComponent} from './pages/tasks/tasks.component';
import {LayoutComponent} from './components/layout/layout.component';
import {canActivateAuth} from './guards/auth.guards';
import {RegisterComponent} from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'tasks', component: TasksComponent
      },
      {
        path: 'milestones', component: TasksComponent
      },
      {
        path: 'analytics', component: TasksComponent
      }
    ],
    canActivate: [canActivateAuth]
  },
  {path: 'login', component: LoginPage},
  {path: 'register', component: RegisterComponent}
];
