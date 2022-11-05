import { Component, Input, OnInit } from '@angular/core';
import { tiendaI } from 'src/app/core/models/tienda';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  TITULO = 'TIENDAS';
  tiendas: tiendaI[] = [
    {
      id: '24',
      nombre: 'el pepe',
      descripcion: 'la mejor tienda ever',
      direccion: 'calle 14b crr32-21',
      propietario: 'pepe',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
