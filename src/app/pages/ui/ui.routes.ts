import { Routes } from '@angular/router';

export const UiRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'components',
        loadChildren: () =>
          import('./components/components.routes').then(
            (m) => m.ComponentsRoutes
          )
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./icons/icons.routes').then(
            (m) => m.IconsRoutes
          ),
      },
      {
        path: 'page-layouts',
        loadChildren: () =>
          import('./page-layouts/page-layouts.routes').then(
            (m) => m.PageLayoutsRoutes
          ),
      },
    ],
  }
];
