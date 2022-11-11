import { Injectable } from '@angular/core';
import { signOut } from '@firebase/auth';
import { ProductoI } from '../core/models/producto';

@Injectable({
  providedIn: 'root',
})
export class ShopingCartService {
  products: ProductoI[] = [];
  suma = 0;
  constructor() {}

  get productCount(): number {
    return this.products.length;
  }

  get totalPrice(): number {
    console.log('entro');

    let suma = 0;
    this.Products.forEach((e) => {
      if (e.precio != undefined) {
        suma += e.precio;
      }
    });
    return suma;
  }

  addProduct(product: ProductoI) {
    if (product) {
      if (this.existe(product)) {
        let inde = 0;
        this.products.map((e) => {
          if (e) {
            if (e === product) {
              if (e.cantida != undefined) {
                e.cantida += 1;
              }
            }
          }
        });
      } else {
        product.cantida = 1;
        this.products.push(product);
      }
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

  sumarPrecio() {
    this.Products.forEach((ele) => {
      if (ele.precio != undefined) {
        this.suma += ele.precio;
      }
    });
  }

  existe(product: ProductoI) {
    return this.products.find((ele, index) => ele === product);
  }

  vaciar() {
    while (this.Products.length > 0) {
      this.products.pop();
    }
  }
}
