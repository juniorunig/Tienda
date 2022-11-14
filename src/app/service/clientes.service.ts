import { Injectable } from '@angular/core';
import { UserI } from '../core/models/user';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  Clientes: UserI[] = [];
  CODIGO_TIENDA = '4567';
  USER_DELTE: UserI = {};
  constructor(private fire: FirestoreService) {
    this.getallCClientes();
  }

  getallCClientes() {
    const res = this.fire.DeleteUser(this.USER_DELTE);
    this.fire.getAllUser().subscribe((users) => {
      users.forEach((user) => {
        this.Clientes.push(user);
      });
    });
  }

  get getClientes(): UserI[] {
    return this.Clientes.filter(
      (clientes) => clientes.codigo === this.CODIGO_TIENDA
    );
  }

  async eliminarCliente(userd: UserI) {
    this.USER_DELTE = userd;

    this.Clientes = this.Clientes.filter((user) => user !== userd);
  }

  updateCliente(cliente: UserI) {
    if (cliente) {
      this.fire.upDateUSer(cliente);
    }
  }
}
