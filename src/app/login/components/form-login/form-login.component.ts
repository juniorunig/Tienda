import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserI } from 'src/app/core/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  login = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnInit(): void {}

  // login normal correo y contraseña
  Login() {
    const email: any = this.login.value.email;
    const password: any = this.login.value.password;

    this.auth
      .Login(email, password)
      .then((user) => {
        console.log(user);
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }

  // login con google
  async LoginWithGoogle() {
    await this.auth.googleAuth().then((user) => {
      this.router.navigate(['/home']);
    });
  }
}
