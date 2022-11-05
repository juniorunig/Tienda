import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserI } from 'src/app/core/models/user';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  registro: FormGroup;
  user: UserI = {
    id: '',
    name: '',
    numberPhone: '',
    address: '',
    emailVerified: false,
    photoUrl: '',
    Email: '',
    Password: '',
    Rol: 'user',
    credito: 0,
  };
  constructor(private fb: FormBuilder) {
    this.registro = this.fb.group({
      codigo: ['', Validators.required],
      Telefono: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      rp_password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async registar() {
    // const password = this.registro.value.password;
    // const rp_password = this.registro.value.rp_password;
    // const telefono = this.registro.value.Telefono;
    // const address = this.registro.value.address;
    // const code = this.registro.value.codigo;
    // const rol = 'user';
    // if (!this.validation()) {
    //   console.log('no paso las validaciones');
    //   return;
    // }
    // this.user.numberPhone = telefono;
    // this.user.address = address;
    // this.user.Rol = rol;
    // const response = await this.firestore.addUser(this.user);
    // console.log(response);
    // const validate = password === rp_password;
    // if (!validate) {
    //   alert('contraseñas no son iguales');
    //   return;
    // }
    // const resp = await this.afAuth
    //   .registroUser(email, password)
    //   .catch((error) => {
    //     this.errorAuth.fireBaseError(error.code);
    //   });
    // if (resp) {
    //   this.router.navigate(['/home']);
    //   console.log('todo bien');
    // }
  }
}
