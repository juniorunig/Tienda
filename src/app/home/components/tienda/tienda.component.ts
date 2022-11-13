import { Component, Input, OnInit } from '@angular/core';
import { tiendaI } from 'src/app/core/models/tienda';
import { UserI } from 'src/app/core/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  PERMISO = 'user';
  TITULO = 'TIENDAS';
  user: UserI = {};
  ROL: 'user' | 'admin' = 'user';
  ID: any = this.user.id;
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

  constructor(private userService: UserService) {
    this.PERMISO = this.userService.getRol;
    console.log(this.PERMISO + ' desde tienda');
  }

  ngOnInit(): void {}
}
