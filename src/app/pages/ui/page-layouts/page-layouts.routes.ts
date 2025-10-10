import { Routes } from '@angular/router';
import { SamplePageComponent } from './sample-page/sample-page.component';

export const PageLayoutsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sample-page',
        component: SamplePageComponent,
      },
    ],
  },
];
