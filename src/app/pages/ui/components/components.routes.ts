import { Routes } from '@angular/router';

// ui
import { BadgeComponent } from './badge/badge.component';
import { ChipsComponent } from './chips/chips.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { DialogComponent } from './dialog/dialog.component';
import { DividerComponent } from './divider/divider.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

export const ComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'badge',
        component: BadgeComponent,
        data: { breadcrumb: 'Badge' },
      },
      {
        path: 'button',
        component: ButtonComponent,
        data: { breadcrumb: 'Button' },
      },
      {
        path: 'button-toggle',
        component: ButtonToggleComponent,
        data: { breadcrumb: 'Button Toggle' },
      },
      {
        path: 'chips',
        component: ChipsComponent,
        data: { breadcrumb: 'Chips' },
      },
      {
        path: 'dialog',
        component: DialogComponent,
        data: { breadcrumb: 'Dialog' },
      },
      {
        path: 'lists',
        component: ListsComponent,
        data: { breadcrumb: 'Lists', showBreadcrumb: false },
      },
      {
        path: 'divider',
        component: DividerComponent,
        data: { breadcrumb: 'Divider', showBreadcrumb: false },
      },
      {
        path: 'menu',
        component: MenuComponent,
        data: { breadcrumb: 'Menu', showBreadcrumb: false },
      },
      {
        path: 'paginator',
        component: PaginatorComponent,
        data: { breadcrumb: 'Paginator', showBreadcrumb: false },
      },
      {
        path: 'progress-bar',
        component: ProgressBarComponent,
        data: { breadcrumb: 'Progress bar', showBreadcrumb: false },
      },
      {
        path: 'tooltips',
        component: TooltipsComponent,
        data: { breadcrumb: 'Tooltips' },
      },
      {
        path: 'forms',
        component: FormsComponent,
        data: { breadcrumb: 'Forms' },
      },
      {
        path: 'tables',
        component: TablesComponent,
        data: { breadcrumb: 'Tables' },
      },
    ],
    data: { breadcrumb: 'Components' },
  },
];
