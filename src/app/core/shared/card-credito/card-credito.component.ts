import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { ComprasService } from 'src/app/service/compras.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { UserService } from 'src/app/service/user.service';
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

  MESSAGE_ERROR_PENDIENTE = 'La compra su estado sigue siendo pendiente';
  MESSAGE_SUCCESS_CREDITO = 'El credito ha sido aprobado';
  MESSAGE_CALCEL_CREDITO = 'El credito ha sido cancelado';
  MESSAGE_ERROR_CREDITO = 'El usuario no tien el credito suficiente';
  @Input() compra: compraI = {};
  @Output() actulizar = new EventEmitter<void>();
  CODE_TABLA = this.getRandomCode(1, 2000) + '';
  constructor(
    private fire: FirestoreService,
    private nofify: NotificacionesService,
    private user: UserService,
    private compraService: ComprasService
  ) {
    this.nomostrar();
  }

  ngOnInit(): void {}

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
    const creditouser = this.user.consultarCredito(this.compra.id_user!);
    console.log(creditouser);

    if (creditouser! < this.compra.valor!) {
      this.nofify.showError(this.MESSAGE_ERROR_CREDITO);
      return;
    }
    this.compra.estado = this.ESTADO_APROBADO;
    this.fire.upDateEstadoCompra(this.compra).then((l) => {
      console.log('compra aprobada');
    });

    // this.nofify.showSuccess('credito aprobado con exito');
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

  actulizarlist() {
    if (this.compra.estado == 'pendiente') {
      this.nofify.showWarnning(this.MESSAGE_ERROR_PENDIENTE);
      return;
    }
    if (this.compra.estado == 'cancelado') {
      this.nofify.showError(this.MESSAGE_CALCEL_CREDITO);
      this.actulizar.emit();
      return;
    }
    if (this.user.getCredito! < this.compra.valor!) {
      this.nofify.showError(this.MESSAGE_ERROR_CREDITO);
    }
    this.actulizar.emit();
    this.compraService.CargarCompra(this.compra.id_user!, this.compra.valor!);
    this.nofify.showSuccess(this.MESSAGE_SUCCESS_CREDITO);
  }
}
