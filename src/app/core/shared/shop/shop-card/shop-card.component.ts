import { Component, Input, OnInit } from '@angular/core';
import { tiendaI } from 'src/app/core/models/tienda';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.css'],
})
export class ShopCardComponent implements OnInit {
  @Input() tienda: tiendaI = {};
  constructor() {}

  ngOnInit(): void {}
}
