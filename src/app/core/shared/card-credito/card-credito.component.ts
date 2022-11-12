import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FirestoreService } from 'src/app/service/firestore.service';
import { compraI } from '../../models/compra';
import { ProductoI } from '../../models/producto';

@Component({
  selector: 'app-card-credito',
  templateUrl: './card-credito.component.html',
  styleUrls: ['./card-credito.component.css'],
})
export class CardCreditoComponent implements OnInit {
  PERFIL_IMG = '/assets/icons/user.png';
  // CODE_TABLA = '';
  COLLAPSE = '';
  ESTADO_APROBADO = 'hecho';
  ESTADO_DENEGADO = 'cancelado';
  NO_MOSTRAR = true;
  productos: ProductoI[] = [];
  @Input() compra: compraI = {};
  CODE_TABLA = this.getRandomCode(1, 2000) + '';
  constructor(private fire: FirestoreService) {
    this.nomostrar();
  }

  ngOnInit(): void {}
  ngonChanges(): void {
    this.compra;
  }

  getRandomCode(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  configurando() {
    let submenu = document.getElementById(this.CODE_TABLA);
    submenu?.classList.toggle('show');
    console.log('agregando');
  }

  confirmarCompra() {
    this.compra.estado = this.ESTADO_APROBADO;
    this.fire.upDateEstadoCompra(this.compra).then((l) => {
      console.log('compra aprobada');
    });
  }

  CancelarCompra() {
    this.compra.estado = this.ESTADO_DENEGADO;
    this.fire.upDateEstadoCompra(this.compra).then((l) => {
      console.log('compra denegada');
    });
  }

  nomostrar() {
    this.NO_MOSTRAR = this.compra.estado == 'hecho' ? false : true;
  }
}
