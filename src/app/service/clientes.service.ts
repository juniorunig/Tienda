import { Injectable } from '@angular/core';
import { UserI } from '../core/models/user';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  Clientes: UserI[] = [];
  CODIGO_TIENDA = '4567';
  constructor(private fire: FirestoreService) {
    this.getallCClientes();
  }

  getallCClientes() {
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
    const res = await this.fire.DeleteUser(userd);
    this.Clientes = this.Clientes.filter((user) => user !== userd);
  }
}
