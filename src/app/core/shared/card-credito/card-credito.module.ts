import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCreditoComponent } from './card-credito.component';
import { ComprasModule } from 'src/app/home/pages/compras/compras.module';
import { ProductCartComponent } from 'src/app/home/pages/components/product-cart/product-cart.component';

@NgModule({
  declarations: [CardCreditoComponent],
  imports: [CommonModule, ComprasModule],
  exports: [CardCreditoComponent],
})
export class CardCreditoModule {}
