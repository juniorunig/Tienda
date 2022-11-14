import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FirestoreService } from 'src/app/service/firestore.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { UserI } from '../../models/user';
import { EditUserComponent } from './modal-edit/edit-user/edit-user.component';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.css'],
})
export class CardUserComponent implements OnInit {
  MENSAJE_DELETE_MODAL = 'esta seguro que quiere eliminar este usurio?';
  MENSAJ_CONFIRM_DELETE = 'el usurio a sido eliminado con exito';
  userDelete: UserI = {};
  ID_MODAL = this.getRandomCode(1, 2000) + '';

  @Input() user: UserI = {};
  @Output() actulizarUSer = new EventEmitter<void>();
  @Output() EliminarItem = new EventEmitter<UserI>();
  @ViewChild(EditUserComponent) modalEdit: any;

  constructor(
    private fire: FirestoreService,
    private notify: NotificacionesService
  ) {
    // this.userDelete = this.user;
  }

  ngOnInit(): void {
    this.userDelete = this.user;
  }

  updateUser(user: UserI) {
    if (user) {
      console.log(this.userDelete);
      // user.permisos!.permiso = 1;
      user.address = 'cll 14 c';
      user.numberPhone = '3106547703';
      user.credito = 30000;
      this.modalEdit.user = user;
      this.modalEdit.setValue;
    }
  }

  Eliminar(user?: UserI) {
    console.log(this.userDelete);
    this.EliminarItem.emit(this.userDelete);
    this.notify.showSuccess(this.MENSAJ_CONFIRM_DELETE);
    this.actulizarUSer.emit();
  }

  getRandomCode(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
