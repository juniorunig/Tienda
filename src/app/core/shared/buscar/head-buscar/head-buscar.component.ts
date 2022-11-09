import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-head-buscar',
  templateUrl: './head-buscar.component.html',
  styleUrls: ['./head-buscar.component.css'],
})
export class HeadBuscarComponent implements OnInit {
  @Input() title: string = '';
  @Output() toCategories = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  volver() {
    this.toCategories.emit();
  }
}
