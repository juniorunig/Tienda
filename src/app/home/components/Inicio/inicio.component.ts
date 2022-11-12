import { Component, OnInit } from '@angular/core';
import { compraI } from 'src/app/core/models/compra';
import { ComprasService } from 'src/app/service/compras.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  compras: compraI[] = [];
  comprasAntiguas: compraI[] = [];
  constructor(
    compraservice: ComprasService,
    private fire: FirestoreService,
    private user: UserService
  ) {
    if (this.compras) {
      this.compras = compraservice.getCompras;
    }

    this.getComprasAntiguas();
    // this.user.CargarDatos;
  }

  ngOnInit(): void {
    this.user.CargarDatos;
  }

  ngDoChange() {
    this.user.getRol;
    this.user.CargarDatos;
  }
  getComprasAntiguas() {
    this.fire.getAllCompras().subscribe((compras) => {
      if (compras) {
        if (this.user.getRol == 'admin') {
          console.log('opteniendo las compras pra el admin');

          compras.forEach((comp) => {
            this.comprasAntiguas.push(comp);
          });
        }
        if (this.user.getRol == 'user') {
          console.log('opteniendo las compras para el user');

          this.fire.getAllCompras().subscribe((compras) => {
            if (compras) {
              let com = compras.filter(
                (compra) => compra.id_user === this.user.getID
              );
              this.comprasAntiguas = com;
            }
          });
        }
      }
    });
  }
}
