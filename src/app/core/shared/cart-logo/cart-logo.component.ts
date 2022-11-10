import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopingCartService } from 'src/app/service/shoping-cart.service';

@Component({
  selector: 'app-cart-logo',
  templateUrl: './cart-logo.component.html',
  styleUrls: ['./cart-logo.component.css'],
})
export class CartLogoComponent implements OnInit {
  constructor(private shoping: ShopingCartService, private router: Router) {}

  ngOnInit(): void {}

  get getCountProduct(): number {
    return this.shoping.productCount;
  }

  goToCompras() {
    this.router.navigate(['tienda/compras']);
  }
}
