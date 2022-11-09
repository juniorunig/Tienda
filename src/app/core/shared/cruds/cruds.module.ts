import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudProductComponent } from './crud-product/crud-product.component';
import { ModalEditComponent } from './crud-product/components/modal-edit/modal-edit.component';
import { ModalAddComponent } from './crud-product/components/moda-add/modal-add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrudProductComponent, ModalEditComponent, ModalAddComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CrudProductComponent],
})
export class CrudsModule {}
