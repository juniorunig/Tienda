import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/core/models/user';
import {
  CustomValidators,
  passwordMatch,
} from 'src/app/core/shared/clases/validacion';
import { AuthService } from 'src/app/service/auth.service';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
})
export class FormRegisterComponent implements OnInit {
  MESSAGE_ERROR = 'DATOS INVALIDOS';
  isInvalid = false;
  registro: FormGroup;
  user: UserI = {
    Rol: 'user',
  };
  patternEmail: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  constructor(
    private fb: FormBuilder,
    private firestore: FirestoreService,
    private auth: AuthService,
    private router: Router
  ) {
    this.registro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: [
        '',
        [Validators.required, Validators.pattern(this.patternEmail)],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rp_password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async registar() {
    this.registro.markAllAsTouched();
    this.registro.updateValueAndValidity();
    if (!this.registro.valid == true) {
      this.messageErrorForm(true);
      console.log('campo vacio');
      return;
    }

    this.messageErrorForm(false);
    this.user.name = this.registro.value.nombre;
    this.user.apellido = this.registro.value.apellido;
    this.user.Email = this.registro.value.correo;
    this.user.Password = this.registro.value.password;

    const respuesta = await this.auth
      .registroUser(this.user.Email, this.user.Password)
      .then((user) => {
        this.user.id = user.user?.uid;
      })
      .catch((error) => {
        this.errorManage(error.code);

        console.log('ocurrio un error en el registro de usurios ');
        return;
      });

    if (this.firestore.savesUser(this.user) === null) {
      console.log('registro: ocurrio un error en guardra el usurio');
    }

    this.router.navigate(['/login']);
  }

  get getEmail() {
    return this.registro.get('correo');
  }

  controlName(name: string) {
    return this.registro.get(name);
  }

  get passwordValidate() {
    return this.registro.get('password')?.value !=
      this.registro.get('rp_password')?.value
      ? true
      : false;
  }

  messageErrorForm(isvalid: boolean) {
    this.isInvalid = isvalid;
  }

  errorManage(error: string) {
    switch (error) {
      case 'auth/email-already-in-use':
        this.MESSAGE_ERROR = 'EL CORREO YA EXISTE!!';
        this.messageErrorForm(true);
        return alert('usurio ya existe');

      default:
        break;
    }
  }
  getCampo(campo: string) {
    return this.registro.get(campo);
  }
  get passwordLength(): string {
    return this.registro.get('password')?.value;
  }
}
