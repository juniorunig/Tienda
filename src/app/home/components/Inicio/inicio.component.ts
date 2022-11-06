import { Component, OnInit } from '@angular/core';
import { compraI } from 'src/app/core/models/compra';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  compras: compraI[] = [
    {
      tipo: 'credito',
      valor: 20000,
      fecha: '20-05-2022',
      estado: 'exito',
    },
    {
      tipo: 'credito',
      valor: 20000,
      fecha: '20-05-2022',
      estado: 'exito',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
