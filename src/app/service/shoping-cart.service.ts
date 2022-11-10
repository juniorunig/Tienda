import { Injectable } from '@angular/core';
import { signOut } from '@firebase/auth';
import { ProductoI } from '../core/models/producto';

@Injectable({
  providedIn: 'root',
})
export class ShopingCartService {
  products: ProductoI[] = [];
  constructor() {}

  get productCount(): number {
    return this.products.length;
  }

  get totalPrice(): number {
    let suma = 0;
    this.products.forEach((item) => {
      if (item.precio) {
        suma += item.precio;
      }
    });

    return suma;
  }

  addProduct(product: ProductoI) {
    if (product) {
      this.products.push(product);
    }
  }

  DeleteProduct(productdelete: ProductoI) {
    console.log(productdelete);

    this.products = this.products.filter((item) => item !== productdelete);
    console.log(this.products[0]);
  }

  get Products(): ProductoI[] {
    return this.products;
  }
}
