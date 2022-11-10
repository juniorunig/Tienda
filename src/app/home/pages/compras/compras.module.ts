import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComprasComponent } from './compras.component';
import { ShopingCartService } from 'src/app/service/shoping-cart.service';
import { ProductCartComponent } from '../components/product-cart/product-cart.component';

@NgModule({
  declarations: [ComprasComponent, ProductCartComponent],
  imports: [CommonModule],
  exports: [ComprasComponent],
  providers: [ShopingCartService],
})
export class ComprasModule {}
