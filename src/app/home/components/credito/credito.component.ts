import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { compraI } from 'src/app/core/models/compra';
import { UserI } from 'src/app/core/models/user';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css'],
})
export class CreditoComponent implements OnInit {
  COMPRAS: compraI[] = [];
  USUARIOS: UserI[] = [];
  OPCION_CAMBIO = true;
  constructor(private fire: FirestoreService, private router: Router) {
    this.optenerCompras();
    this.getAlluser();
  }

  ngOnInit(): void {}

  optenerCompras() {
    console.log('actulizando');

    this.fire.getAllCompras().subscribe((compras) => {
      if (compras) {
        compras.forEach((compra) => {
          if (compra.estado === 'pendiente') {
            this.COMPRAS.push(compra);
          }
        });
      }
    });
  }

  aculizar() {
    console.log('actulizando');
    this.COMPRAS = [];

    this.fire.getAllCompras().subscribe((compras) => {
      if (compras) {
        compras.forEach((compra) => {
          if (compra.estado === 'pendiente') {
            this.COMPRAS.push(compra);
          }
        });
      }
    });
    this.router.navigateByUrl('credito');
  }

  getAlluser() {
    this.fire.getAllUser().subscribe((users) => {
      users.forEach((user) => {
        console.log(user.name);

        this.USUARIOS.push(user);
      });
    });
  }
}
