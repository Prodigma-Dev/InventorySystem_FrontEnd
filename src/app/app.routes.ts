import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    // component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
        data: { breadcrumb: 'Dashboard' }
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'ui',
        loadChildren: () =>
          import('./pages/ui/ui.routes').then(
            (m) => m.UiRoutes
          ),
      }
    ],
  },
  {
    path: 'login',
    redirectTo: 'authentication/login',
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'errors',
        loadChildren: () =>
          import('./pages/errors/errors.routes').then(
            (m) => m.ErrorsRoutes
          ),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'faq',
        component: FaqComponent,
      },
    ],
  },
  {
    path: 'coming-soon',
    canActivate: [AuthGuard],
    component: ComingSoonComponent
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];
