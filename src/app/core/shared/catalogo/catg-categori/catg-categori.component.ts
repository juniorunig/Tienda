import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriaI } from 'src/app/core/models/categoria';

@Component({
  selector: 'app-catg-categori',
  templateUrl: './catg-categori.component.html',
  styleUrls: ['./catg-categori.component.css'],
})
export class CatgCategoriComponent implements OnInit {
  @Input() categoria: CategoriaI = {};
  @Output() actualizar = new EventEmitter<string>();
  @Output() filtro = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  goToProducts() {
    this.actualizar.emit(this.categoria.nombre);
    // console.log('probando');
  }

  FiltrarProducts() {
    this.filtro.emit(this.categoria.nombre);
  }
}
