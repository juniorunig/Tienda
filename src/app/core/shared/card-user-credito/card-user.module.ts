import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardUserComponent } from './card-user.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './modal-edit/edit-user/edit-user.component';

@NgModule({
  declarations: [CardUserComponent, EditUserComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CardUserComponent],
})
export class CardUserModule {}
