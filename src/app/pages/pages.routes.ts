import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OurLastProjectsComponent } from './our-last-projects/our-last-projects.component';
import { NotInOfficeComponent } from './not-in-office/not-in-office.component';
import { NextShotsComponent } from './next-shots/next-shots.component';
import { NextShotDetailComponent } from './next-shots/next-shot-detail/next-shot-detail.component';
import { FastEquipmentRentalComponent } from './fast-equipment-rental/fast-equipment-rental.component';
import { EquipmentConfirmationComponent } from './fast-equipment-rental/equipment-confirmation/equipment-confirmation.component';
import { UserAccountComponent } from './user-account/user-account.component';

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
    path: 'dashboard/next-shots/add',
    component: NextShotDetailComponent,
  },
  {
    path: 'next-shots/:id',
    component: NextShotDetailComponent,
  },
  {
    path: 'equipment-rental',
    component: FastEquipmentRentalComponent,
  },
  {
    path: 'equipment-confirmation',
    component: EquipmentConfirmationComponent,
  },
  {
    path: 'user-account/:id',
    component: UserAccountComponent,
  },
];
