import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CardPerfilModule } from '../core/shared/card-perfil/card-perfil.module';

import { CreditoComponent } from './components/credito/credito.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CatalogoModule } from '../core/shared/catalogo/catalogo.module';

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
  imports: [
    CommonModule,
    CardPerfilModule,
    CatalogoModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
