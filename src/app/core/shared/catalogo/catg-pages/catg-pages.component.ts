import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaI } from 'src/app/core/models/categoria';
import { ProductoI } from 'src/app/core/models/producto';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-catg-pages',
  templateUrl: './catg-pages.component.html',
  styleUrls: ['./catg-pages.component.css'],
})
export class CatgPagesComponent implements OnInit {
  ListName = 'Categorias';

  productos: ProductoI[] = [
    // {
    //   nombre: 'producto',
    //   precio: 0.0,
    //   unidad: 'libra',
    // },
    // {
    //   nombre: 'producto',
    //   precio: 0.0,
    //   unidad: 'libra',
    // },
    // {
    //   nombre: 'producto',
    //   precio: 0.0,
    //   unidad: 'libra',
    // },
    // {
    //   nombre: 'producto',
    //   precio: 0.0,
    //   unidad: 'libra',
    // },
    // {
    //   nombre: 'producto',
    //   precio: 0.0,
    //   unidad: 'libra',
    // },
  ];

  categorias: CategoriaI[] = [];

  constructor(private router: Router, private firestore: FirestoreService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  actualizar($event: any) {
    const categ = $event;
    this.firestore.getAllProductos().subscribe((products) => {
      if (products) {
        const pro = products.filter((product) => product.categoria === categ);
        this.productos = pro;
        console.log(pro);
      } else {
        console.log('vacio');
      }
    });

    this.ListName = 'productos';
    this.router.navigate(['/productos']);
  }

  getCategories() {
    this.firestore.getAllCategories().subscribe((res) => {
      res.forEach((categoria) => {
        if (categoria) {
          categoria.imgUrl = 'bx bxs-baguette bx-lg';
          this.categorias.push(categoria);
        }
      });
    });
  }

  toCategories() {
    this.ListName = 'Categorias';
  }
}
