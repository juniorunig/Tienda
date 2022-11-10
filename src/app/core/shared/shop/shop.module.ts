import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { CarIcoComponent } from './car-icon/car-ico.component';

@NgModule({
  declarations: [ShopCardComponent, CarIcoComponent],
  imports: [CommonModule],
  exports: [ShopCardComponent],
})
export class ShopModule {}
