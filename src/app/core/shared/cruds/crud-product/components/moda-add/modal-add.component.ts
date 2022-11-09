import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoI } from 'src/app/core/models/producto';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css'],
})
export class ModalAddComponent implements OnInit {
  formAdd: FormGroup;
  productAdd: ProductoI = {};
  constructor(
    private fb: FormBuilder,
    private firestore: FirestoreService,
    private router: Router
  ) {
    this.formAdd = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      unidad: ['', Validators.required],
      marca: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getvalues() {
    this.productAdd.nombre = this.formAdd.value.nombre;
    this.productAdd.categoria = this.formAdd.value.categoria;
    this.productAdd.precio = this.formAdd.value.precio;
    this.productAdd.marca = this.formAdd.value.marca;
    this.productAdd.unidad = this.formAdd.value.unidad;
    this.productAdd.id = this.firestore.GenerarId();
  }

  registrar() {
    this.getvalues();
    this.firestore.Save(this.productAdd);
  }
}
