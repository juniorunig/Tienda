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
import { CardCreditoModule } from '../core/shared/card-credito/card-credito.module';
import { PermisosGuard } from '../guard/permisos.guard';
import { CardUserModule } from '../core/shared/card-user-credito/card-user.module';
import { UserService } from '../service/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
        canActivate: [PermisosGuard],
      },
      {
        path: 'credito',
        component: CreditoComponent,
        canActivate: [PermisosGuard],
      },
      {
        path: 'tienda',
        component: TiendaComponent,
        canActivate: [PermisosGuard],
      },
      {
        path: 'tienda/compras',
        component: ComprasComponent,
        canActivate: [PermisosGuard],
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
    CardCreditoModule,
    CardUserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [FirestoreService, AuthService, UserService],
})
export class HomeModule {}
