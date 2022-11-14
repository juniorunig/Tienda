import { Injectable } from '@angular/core';
import { compraI } from '../core/models/compra';
import { UserI } from '../core/models/user';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  compras: compraI[] = [];
  constructor(private fire: FirestoreService) {}

  SaveCompras(compra: compraI) {
    if (compra) {
      compra.id = this.fire.GenerarId();
      this.compras.push(compra);
      this.fire.SaveCompras(compra);
    }
  }

  get getCompras() {
    return this.compras;
  }

  CargarCompra(id: string, credito: number) {
    const path = 'users';
    const uid = id;
    const user = this.fire.getOne<UserI>(path, uid).then((user) => {
      user.subscribe((us) => {
        if (us!.deuda && us!.credito) {
          us!.deuda += credito!;
          us!.credito -= credito!;
        }
        this.fire.upDateUSer(us!).then();
      });
    });
  }
}
