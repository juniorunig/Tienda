import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-buscar',
  templateUrl: './head-buscar.component.html',
  styleUrls: ['./head-buscar.component.css'],
})
export class HeadBuscarComponent implements OnInit {
  @Input() title: string = '';
  constructor() {}

  ngOnInit(): void {}
}
