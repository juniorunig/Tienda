import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosCardComponent } from './pedidos-card/pedidos-card.component';

@NgModule({
  declarations: [PedidosCardComponent],
  imports: [CommonModule],
  exports: [PedidosCardComponent],
})
export class PedidosModule {}
