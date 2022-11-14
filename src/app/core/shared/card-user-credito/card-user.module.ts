import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './modal-edit/edit-user/edit-user.component';
import { ComfirmModalComponent } from '../confirm-dialog/comfirm-modal.component';

@NgModule({
  declarations: [CardUserComponent, EditUserComponent, ComfirmModalComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardUserComponent],
})
export class CardUserModule {}
