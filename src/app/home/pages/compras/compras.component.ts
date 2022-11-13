import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { compraI } from 'src/app/core/models/compra';
import { ProductoI } from 'src/app/core/models/producto';
import { AuthService } from 'src/app/service/auth.service';
import { ComprasService } from 'src/app/service/compras.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { ShopingCartService } from 'src/app/service/shoping-cart.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent implements OnInit {
  producst: ProductoI[] = [];
  compra: compraI = {};
  TIPO_COMPRAS = 'credito';
  ESTADO_COMPRAS = 'pendiente';
  MESSAGE_COMPRA_ERROR = 'El carrito de compra esta vacio!!';
  MESSAGE_COMPRA_SUCESS = 'Compra realizada con exito';
  MESSAGE_ERROR_CREDITO = 'No tienes el credito suficiente';
  constructor(
    private shooping: ShopingCartService,
    private compras: ComprasService,
    private userActual: UserService,
    private notify: NotificacionesService
  ) {
    this.producst = this.shooping.products;
  }

  ngOnInit(): void {}

  EliminarProduct($event: any) {
    this.shooping.DeleteProduct($event);
    this.producst = this.shooping.products;
  }

  precioTotatl() {
    let total = 0;
    this.producst.forEach((e) => {
      if (e.precio != undefined && e.cantida) {
        console.log(e.precio + '--' + e.cantida);

        total += (e.precio * e.cantida) as number;
        console.log(total);
      }
    });
    if (total) {
      return total;
    }
    return 0;
  }

  saveCompras() {
    if (this.producst.length < 1) {
      this.notify.showError(this.MESSAGE_COMPRA_ERROR);
      return;
    }
    if (this.userActual.getCredito! < this.precioTotatl()) {
      this.notify.showWarnning(this.MESSAGE_ERROR_CREDITO);
      return;
    }
    console.log('paso');

    if (this.producst.length !== undefined) {
      this.compra.productos = this.producst;
      this.compra.tipo = this.TIPO_COMPRAS;
      this.compra.fecha = new Date(Date.now()).toDateString() + '';
      this.compra.estado = this.ESTADO_COMPRAS;
      this.compra.valor = this.precioTotatl();
      this.compra.id_user = this.userActual.getID;
      this.compra.name_user = this.userActual.GetName;
      console.log(this.compra);
      this.compras.SaveCompras(this.compra);
      this.shooping.vaciar();
      this.notify.showSuccess(this.MESSAGE_COMPRA_SUCESS);
    }
  }
}
