import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserI } from 'src/app/core/models/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user: UserI = {};
  CODE_TIENDA = '';
  formUser: FormGroup;
  constructor(private fb: FormBuilder) {
    this.formUser = this.fb.group({
      address: ['', Validators.required],
      numberPhone: ['', Validators.required],
      credito: ['', Validators.required],
      // permisos.permiso : ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  updateProducto() {
    this.user.address = this.formUser.value.address;
    this.user.numberPhone = this.formUser.value.numberPhone;
    this.user.credito = this.formUser.value.credito;
    // this.user.permisos!.permiso = this.formUser.value.permiso;
    console.log(this.user);

    // conexion con firestore

    // this.fire.upDateProduct(this.upproduct).then((res) => {
    //   console.log('salio bien la actualizacion');
    // });
  }

  setCampos() {
    let permiso;
    this.formUser.controls['address'].setValue(this.user.address);
    this.formUser.controls['numberPhone'].setValue(this.user.numberPhone);
    this.formUser.controls['credito'].setValue(this.user.credito);
    // this.formUser.controls['permiso'].setValue(this.user.permisos!.permiso);
  }
}
