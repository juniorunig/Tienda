import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { compraI } from 'src/app/core/models/compra';
import { UserI } from 'src/app/core/models/user';
import { ClientesService } from 'src/app/service/clientes.service';
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
  constructor(
    private fire: FirestoreService,
    private router: Router,
    private clintes: ClientesService
  ) {
    this.optenerCompras();
    this.getAlluser();
  }

  ngOnInit(): void {
    // this.clintes.getallCClientes;
  }

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

  getAlluser(update?: boolean) {
    this.USUARIOS = this.clintes.getClientes;
    // if (update) {
    // }
  }

  eliminarItem($event: any) {
    console.log($event);
    this.clintes.eliminarCliente($event);
    this.USUARIOS = this.clintes.getClientes;
  }
}
