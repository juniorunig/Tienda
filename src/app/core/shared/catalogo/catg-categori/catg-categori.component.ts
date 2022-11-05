import { Component, Input, OnInit } from '@angular/core';
import { CategoriaI } from 'src/app/core/models/categoria';

@Component({
  selector: 'app-catg-categori',
  templateUrl: './catg-categori.component.html',
  styleUrls: ['./catg-categori.component.css'],
})
export class CatgCategoriComponent implements OnInit {
  @Input() categoria: CategoriaI = {};
  constructor() {}

  ngOnInit(): void {}
}
