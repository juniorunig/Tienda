import { Injectable } from '@angular/core';
import { compraI } from '../core/models/compra';
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
      // this.fire.SaveCompras(compra);
    }
  }

  get getCompras() {
    return this.compras;
  }
}
