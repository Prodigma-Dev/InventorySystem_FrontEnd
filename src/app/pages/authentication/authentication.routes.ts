import { Routes } from '@angular/router';

import { SideLoginComponent } from './side-login/side-login.component';
import { SideRegisterComponent } from './side-register/side-register.component';
import { SideForgotPasswordComponent } from './side-forgot-password/side-forgot-password.component';
import { CenterLoginComponent } from './center-login/center-login.component';
import { CenterRegisterComponent } from './center-register/center-register.component';
import { CenterForgotPasswordComponent } from './center-forgot-password/center-forgot-password.component';
import { CenterTwoStepComponent } from './center-two-step/center-two-step.component';
import { SideTwoStepComponent } from './side-two-step/side-two-step.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      // {
      //   path: 'login/side',
      //   component: SideLoginComponent,
      // },
      // {
      //   path: 'login/center',
      //   component: CenterLoginComponent,
      // },
      // {
      //   path: 'register/side',
      //   component: SideRegisterComponent,
      // },
      // {
      //   path: 'register/center',
      //   component: CenterRegisterComponent,
      // },
      // {
      //   path: 'forgot-password/side',
      //   component: SideForgotPasswordComponent,
      // },
      // {
      //   path: 'forgot-password/center',
      //   component: CenterForgotPasswordComponent,
      // },
      // {
      //   path: 'two-step/side',
      //   component: SideTwoStepComponent,
      // },
      // {
      //   path: 'two-step/center',
      //   component: CenterTwoStepComponent,
      // },
    ],
  },
];
