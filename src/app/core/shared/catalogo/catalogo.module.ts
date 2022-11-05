import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatgItemComponent } from './catg-item/catg-item.component';
import { CatgCategoriComponent } from './catg-categori/catg-categori.component';
import { CatgPagesComponent } from './catg-pages/catg-pages.component';

@NgModule({
  declarations: [CatgItemComponent, CatgCategoriComponent, CatgPagesComponent],
  imports: [CommonModule],
  exports: [CatgItemComponent, CatgCategoriComponent, CatgPagesComponent],
})
export class CatalogoModule {}
