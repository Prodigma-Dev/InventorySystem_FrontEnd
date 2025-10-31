import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurLastProjectsComponent } from './our-last-projects/our-last-projects.component';
import { NotInOfficeComponent } from './not-in-office/not-in-office.component';
import { NextShotsComponent } from './next-shots/next-shots.component';
import { NextShotDetailComponent } from './next-shots/next-shot-detail/next-shot-detail.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      title: 'Starter',
      breadcrumb: 'Dashboard',
      showBreadcrumb: false
    },
  },
  {
    path: 'our-last-projects',
    component: OurLastProjectsComponent,
    data: { title: 'Son layihələrimiz' }
  },
  {
    path: 'not-in-office',
    component: NotInOfficeComponent,
    data: { title: 'Ofisdə olmayanlar' }
  },
  {
    path: 'next-shots',
    component: NextShotsComponent,
    data: { title: 'Növbədə nələr var?' }
  },
  {
    path: 'next-shots/:id',
    component: NextShotDetailComponent,
    data: { title: 'Çəkiliş detalları' }
  },
];
