import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/pages/login/login.component';
import { HomeComponent } from './user/pages/home/home.component';
import { ForgotPasswordComponent } from './user/pages/forgot-password/forgot-password.component';
import { RegistrationComponent } from './user/pages/registration/registration.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
