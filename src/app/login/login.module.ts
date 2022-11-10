import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { FormRegisterComponent } from './components/form-register/form-register.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirestoreService } from '../service/firestore.service';
import { AuthService } from '../service/auth.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: FormLoginComponent,
      },
      {
        path: 'register',
        component: FormRegisterComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [FormLoginComponent, FormRegisterComponent, LoginComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    RouterModule.forChild(routes),
  ],
  providers: [FirestoreService, AuthService],
})
export class LoginModule {}
