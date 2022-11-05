import { Component, Input, OnInit } from '@angular/core';
import { ProductoI } from 'src/app/core/models/producto';

@Component({
  selector: 'app-catg-item',
  templateUrl: './catg-item.component.html',
  styleUrls: ['./catg-item.component.css'],
})
export class CatgItemComponent implements OnInit {
  @Input() producto: ProductoI = {};

  name: string = '';
  constructor() {}

  ngOnInit(): void {
    this.name = 'producto';
  }
}
