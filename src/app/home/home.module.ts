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
import { ShopModule } from '../core/shared/shop/shop.module';
import { BuscarModule } from '../core/shared/buscar/buscar.module';
import { InicioComponent } from './components/Inicio/inicio.component';
import { PedidosModule } from '../core/shared/pedidos/pedidos.module';
import { CrudsModule } from '../core/shared/cruds/cruds.module';
import { FirestoreService } from '../service/firestore.service';
import { AuthService } from '../service/auth.service';
import { CartLogoModule } from '../core/shared/cart-logo/cart-logo.module';
import { ComprasModule } from './pages/compras/compras.module';
import { ComprasComponent } from './pages/compras/compras.component';
import { ProductCartComponent } from './pages/components/product-cart/product-cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
      },
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
      {
        path: 'tienda/compras',
        component: ComprasComponent,
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
    InicioComponent,
  ],
  imports: [
    CommonModule,
    CardPerfilModule,
    CatalogoModule,
    ShopModule,
    BuscarModule,
    PedidosModule,
    CrudsModule,
    CartLogoModule,
    ComprasModule,
    RouterModule.forChild(routes),
  ],
  providers: [FirestoreService, AuthService],
})
export class HomeModule {}
