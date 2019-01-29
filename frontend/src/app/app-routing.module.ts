import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  ForgotPasswordComponent, LoginComponent, RegisterComponent, ResetPasswordComponent
} from './_components/auth/index';
import { HomeComponent } from './_components/views/components/home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
