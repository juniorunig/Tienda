import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comfirm-modal',
  templateUrl: './comfirm-modal.component.html',
  styleUrls: ['./comfirm-modal.component.css'],
})
export class ComfirmModalComponent implements OnInit {
  @Input() msj: string = '';
  @Output() accion = new EventEmitter<void>();
  @Input() ID_Modal = '';
  constructor() {}

  ngOnInit(): void {
    console.log('eliminar confirm');
  }

  ejecutar() {
    this.accion.emit();
  }
}
