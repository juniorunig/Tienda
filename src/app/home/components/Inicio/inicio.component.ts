import { Component, OnInit } from '@angular/core';
import { compraI } from 'src/app/core/models/compra';
import { ComprasService } from 'src/app/service/compras.service';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  compras: compraI[] = [];
  comprasAntiguas: compraI[] = [];
  constructor(compraservice: ComprasService, private fire: FirestoreService) {
    if (this.compras) {
      this.compras = compraservice.getCompras;
    }

    this.getComprasAntiguas();
  }

  ngOnInit(): void {}

  getComprasAntiguas() {
    this.fire.getAllCompras().subscribe((el) => {
      if (el) {
        el.forEach((item) => {
          this.comprasAntiguas.push(item);
        });
      }
    });
  }
}
