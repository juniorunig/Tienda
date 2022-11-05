import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadBuscarComponent } from './head-buscar/head-buscar.component';

@NgModule({
  declarations: [HeadBuscarComponent],
  imports: [CommonModule],
  exports: [HeadBuscarComponent],
})
export class BuscarModule {}
