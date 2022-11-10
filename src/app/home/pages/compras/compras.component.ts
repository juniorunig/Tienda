import { Component, OnInit } from '@angular/core';
import { ProductoI } from 'src/app/core/models/producto';
import { ShopingCartService } from 'src/app/service/shoping-cart.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent implements OnInit {
  producst: ProductoI[] = [];
  constructor(private shooping: ShopingCartService) {
    this.producst = this.shooping.products;
  }

  ngOnInit(): void {}

  EliminarProduct($event: any) {
    this.shooping.DeleteProduct($event);
    this.producst = this.shooping.products;
  }
}
