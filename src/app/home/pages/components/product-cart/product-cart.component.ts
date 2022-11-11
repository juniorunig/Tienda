import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductoI } from 'src/app/core/models/producto';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent implements OnInit {
  @Input() product: ProductoI = {};
  @Output() Eliminar = new EventEmitter<ProductoI>();
  @Input() DesactivarDelte!: boolean;
  constructor() {}

  ngOnInit(): void {}

  eliminarProduct() {
    this.Eliminar.emit(this.product);
  }
}
