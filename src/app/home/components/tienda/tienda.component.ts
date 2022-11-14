import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tiendaI } from 'src/app/core/models/tienda';
import { UserI } from 'src/app/core/models/user';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { TiendaService } from 'src/app/service/tienda.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  PERMISO = 'user';
  TITULO = 'TIENDAS';
  CREDITO_dISPONIBLE = 0;
  MESSAGE_DATOS_INCOMPLETOS = 'Por favor llene los datos del formulario';
  MESAAGE_CONFIRM_UPDATE = 'los datos han sido enviados con exito';
  CODE_COLAPSE = 'colapse';
  user: UserI = {};
  ROL: 'user' | 'admin' = 'user';
  ID: any = this.user.id;
  tienda: tiendaI = {};

  HABILITAR_PAGE = false;
  tiendas: tiendaI[] = [
    {
      id: '24',
      nombre: 'el pepe',
      descripcion: 'la mejor tienda ever',
      direccion: 'calle 14b crr32-21',
      propietario: 'pepe',
    },
  ];

  datosForm: FormGroup;
  constructor(
    private userService: UserService,
    private tiendaSerive: TiendaService,
    private notify: NotificacionesService,
    private fb: FormBuilder
  ) {
    this.datosForm = this.fb.group({
      address: ['', Validators.required],
      numberPhone: ['', Validators.required],
    });

    this.PERMISO = this.userService.getRol;
    console.log(this.PERMISO + ' desde tienda');
    this.tiendaSerive.getAllTienda();
  }

  ngOnInit(): void {
    this.getTienda();
    this.CREDITO_dISPONIBLE = this.userService.getCredito!;
  }

  configurando() {
    let submenu = document.getElementById(this.CODE_COLAPSE);
    submenu?.classList.toggle('show');
    console.log('agregando');
  }

  getTienda() {
    this.tienda = this.tiendaSerive.getTienda;
  }

  collapse() {
    let submenu = document.getElementById(this.CODE_COLAPSE);
    submenu?.classList.toggle('show');
    console.log('agregando');
  }
  solicitarCredito(codigo: string) {
    if (this.userService.DatosParaCredito) {
      this.notify.showWarnning(this.MESSAGE_DATOS_INCOMPLETOS);
      this.collapse();
      return;
    }
    if (codigo.length < 4) {
      this.notify.showError('codigo invalido');
      return;
    }
    this.userService.establcerCodigo(codigo);
    this.notify.showSuccess('codigo establecido');
    this.user = this.userService.user;
    this.userService.userdataCredito(this.user);
  }

  validarRegistro() {
    const telefono = this.datosForm.value.numberPhone;
    const address = this.datosForm.value.address;
    if (telefono.length < 10) {
      this.notify.showError('numero de celular invalido');
      return;
    }
    let us = this.userService.user;
    us.numberPhone = telefono;
    us.address = address;
    this.user = us;
    this.userService.userdataCredito(us);
    // this.userService.CargarDatos;
    this.notify.showSuccess(this.MESAAGE_CONFIRM_UPDATE);
    this.collapse();
  }
}
