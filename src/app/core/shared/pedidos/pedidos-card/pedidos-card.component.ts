import { Component, Input, OnInit } from '@angular/core';
import { compraI } from 'src/app/core/models/compra';

@Component({
  selector: 'app-pedidos-card',
  templateUrl: './pedidos-card.component.html',
  styleUrls: ['./pedidos-card.component.css'],
})
export class PedidosCardComponent implements OnInit {
  estados: string[] = ['btn btn-warning', 'btn btn-success', 'btn btn-danger'];

  @Input() compra: compraI = {};
  constructor() {}

  ngOnInit(): void {}
}
