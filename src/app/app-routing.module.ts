import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core';
import { PermisosGuard } from './guard/permisos.guard';
import { InicioComponent } from './home/components/Inicio/inicio.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [PermisosGuard],
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    // canActivate: [PermisosGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
