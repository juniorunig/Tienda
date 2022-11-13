import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UserI } from '../../models/user';
import { EditUserComponent } from './modal-edit/edit-user/edit-user.component';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent implements OnInit {
  @Input() user: UserI = {};
  @ViewChild(EditUserComponent) modalEdit: any;
  constructor() {
    // this.modalEdit.user = this.user;
  }

  ngOnInit(): void {}

  updateUser(user: UserI) {
    if (user) {
      console.log(user);
      // user.permisos!.permiso = 1;
      user.address = 'cll 14 c';
      user.numberPhone = '3106547703';
      user.credito = 30000;
      this.modalEdit.user = user;
      this.modalEdit.setValue;
    }
  }
}
