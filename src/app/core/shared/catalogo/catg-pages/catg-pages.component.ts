import { Component, OnInit } from '@angular/core';
import { CategoriaI } from 'src/app/core/models/categoria';
import { ProductoI } from 'src/app/core/models/producto';

@Component({
  selector: 'app-catg-pages',
  templateUrl: './catg-pages.component.html',
  styleUrls: ['./catg-pages.component.css'],
})
export class CatgPagesComponent implements OnInit {
  ListName = 'productos';

  productos: ProductoI[] = [
    {
      nombre: 'producto',
      precio: 0.0,
      unidad: 'libra',
    },
    {
      nombre: 'producto',
      precio: 0.0,
      unidad: 'libra',
    },
    {
      nombre: 'producto',
      precio: 0.0,
      unidad: 'libra',
    },
    {
      nombre: 'producto',
      precio: 0.0,
      unidad: 'libra',
    },
    {
      nombre: 'producto',
      precio: 0.0,
      unidad: 'libra',
    },
  ];

  categorias: CategoriaI[] = [
    {
      nombre: 'bebidas',
      imgUrl: 'bx bxs-baguette bx-lg',
    },
    {
      nombre: 'bebidas',
      imgUrl: 'bx bxs-baguette bx-lg',
    },
    {
      nombre: 'bebidas',
      imgUrl: 'bx bxs-baguette bx-lg',
    },
    {
      nombre: 'bebidas',
      imgUrl: 'bx bxs-baguette bx-lg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
