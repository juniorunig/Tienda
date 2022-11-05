import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './components/producto/producto.component';
import { CreditoComponent } from './components/credito/credito.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardPerfilComponent } from '../core/shared/card-perfil/card-perfil.component';
import { CardPerfilModule } from '../core/shared/card-perfil/card-perfil.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'productos',
        component: ProductoComponent,
      },
      {
        path: 'credito',
        component: CreditoComponent,
      },
      {
        path: 'tienda',
        component: TiendaComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    ProductoComponent,
    CreditoComponent,
    TiendaComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, CardPerfilModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
