import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCardComponent } from './shop-card/shop-card.component';

@NgModule({
  declarations: [ShopCardComponent],
  imports: [CommonModule],
  exports: [ShopCardComponent],
})
export class ShopModule {}
