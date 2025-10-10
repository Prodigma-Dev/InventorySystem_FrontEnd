import { Routes } from '@angular/router';
import { TablerIconsComponent } from './tabler-icons/tabler-icons.component';

export const IconsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tabler-icons',
        component: TablerIconsComponent,
      },
    ],
  },
];
