import { Injectable } from '@angular/core';
import { tiendaI } from '../core/models/tienda';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class TiendaService {
  tiendas: tiendaI = {};
  constructor(private fire: FirestoreService) {}

  getAllTienda() {
    this.fire.getAllTienda().subscribe((tiendas) => {
      tiendas.forEach((tienda) => {
        this.tiendas = tienda;
      });
    });
  }

  get getTienda(): tiendaI {
    return this.tiendas;
  }
}
