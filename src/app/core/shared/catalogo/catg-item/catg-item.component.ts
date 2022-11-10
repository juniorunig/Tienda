import { Component, Input, OnInit } from '@angular/core';
import { ProductoI } from 'src/app/core/models/producto';
import { ShopingCartService } from 'src/app/service/shoping-cart.service';

@Component({
  selector: 'app-catg-item',
  templateUrl: './catg-item.component.html',
  styleUrls: ['./catg-item.component.css'],
})
export class CatgItemComponent implements OnInit {
  @Input() producto: ProductoI = {};

  name: string = '';
  constructor(private shoping: ShopingCartService) {}

  ngOnInit(): void {
    this.name = 'producto';
  }

  addProduct() {
    this.shoping.addProduct(this.producto);
  }
}
