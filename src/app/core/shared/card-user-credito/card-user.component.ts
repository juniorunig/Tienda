import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ClientesService } from 'src/app/service/clientes.service';
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
  CODE_TABLA = this.getRandomCode(1, 2000) + '';
  @Input() user: UserI = {};
  @Output() actulizarUSer = new EventEmitter<void>();
  @Output() EliminarItem = new EventEmitter<UserI>();
  @ViewChild(EditUserComponent) modalEdit: any;

  constructor(
    private fire: FirestoreService,
    private notify: NotificacionesService,
    private clienteService: ClientesService
  ) {
    // this.userDelete = this.user;
  }

  ngOnInit(): void {
    this.userDelete = this.user;
  }

  Eliminar(user?: UserI) {
    this.EliminarItem.emit(this.userDelete);
    this.notify.showSuccess(this.MENSAJ_CONFIRM_DELETE);
    this.EliminarItem.emit(this.user);
  }

  getRandomCode(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  configurando() {
    let submenu = document.getElementById(this.CODE_TABLA);
    submenu?.classList.toggle('show');
    console.log('agregando');
  }

  capturardatos(address: string, telefono: string, credito: string) {
    if (address.length < 1 || telefono.length < 1 || credito.length < 1) {
      this.notify.showError('rellene todo los campos');
      return;
    }
    if (credito === '') {
      this.notify.showError('valor del credito invalido');
      return;
    }
    let credit = parseFloat(credito);
    console.log(address, telefono, credit);
    this.user.address = address;
    this.user.numberPhone = telefono;
    this.user.credito = credit;
    this.clienteService.updateCliente(this.user);
    this.notify.showSuccess('se ha establecido un nuevo credito');
  }

  cancelar(uaser: UserI) {}
}
