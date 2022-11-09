import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoI } from 'src/app/core/models/producto';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css'],
})
export class ModalEditComponent implements OnInit {
  upproduct: ProductoI = {};
  formProduct: FormGroup;

  constructor(private fb: FormBuilder, private fire: FirestoreService) {
    this.formProduct = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      precio: ['', Validators.required],
      unidad: ['', Validators.required],
      marca: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  updateProducto() {
    this.upproduct.nombre = this.formProduct.value.nombre;
    this.upproduct.categoria = this.formProduct.value.categoria;
    this.upproduct.precio = this.formProduct.value.precio;
    this.upproduct.marca = this.formProduct.value.marca;
    this.upproduct.unidad = this.formProduct.value.unidad;
    // conexion con firestore

    this.fire.upDateProduct(this.upproduct).then((res) => {
      console.log('salio bien la actualizacion');
    });

    console.log(this.upproduct);
  }

  setCampos() {
    this.formProduct.controls['nombre'].setValue(this.upproduct.nombre);
    this.formProduct.controls['categoria'].setValue(this.upproduct.categoria);
    this.formProduct.controls['precio'].setValue(this.upproduct.precio);
    this.formProduct.controls['marca'].setValue(this.upproduct.marca);
    this.formProduct.controls['unidad'].setValue(this.upproduct.unidad);
  }
}
