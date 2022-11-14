import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from '../core/models/user';
import { AuthService } from '../service/auth.service';
import { FirestoreService } from '../service/firestore.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  usuario: UserI = {
    id: '',
    name: '',
    apellido: '',
    numberPhone: '',
    address: '',
    photoURl: '',
    Email: '',
    Password: '',
    Rol: '',
    credito: 0,
    deuda: 0,
    codigo: '',
  };
  constructor(
    private auth: AuthService,
    private firestore: FirestoreService,
    private Router: Router,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.getUSer();
    this.Router.navigate(['inicio']);
    // console.çlog(this.user.CargarDatos + '-----------');
  }

  SaveUser() {}

  getUSer() {
    let uid: string;
    this.auth.getStateUser().subscribe((us) => {
      if (us !== null) {
        this.usuario.id = us.uid!;
        this.usuario.name = us.displayName!;
        this.usuario.Email = us.email!;
        this.usuario.photoURl = us.photoURL!;
        let uid = us.uid;
        const path = 'users';
        this.firestore.getOne<UserI>(path, uid).then((res) => {
          res.subscribe((us) => {
            if (us === undefined) {
              this.usuario.Rol = 'user';
              this.firestore.savesUser(this.usuario);
            } else {
              console.log('ya esta registrado');
              this.user.Setuser = us;
            }
          });
        });
      }
    });
  }
}
