import { Injectable } from '@angular/core';
import { compraI } from '../core/models/compra';
import { UserI } from '../core/models/user';
import { AuthService } from './auth.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private USUARIO_ACTUAL: UserI = {};

  constructor(private auth: AuthService, private Fire: FirestoreService) {
    this.auth.getStateUser().subscribe((user) => {
      console.log('opteniendo datos del usuario');
      if (user) {
        this.getDatosUser(user.uid);
      }
    });
  }

  private getDatosUser(uid: string) {
    const PATH = 'users';
    const id = uid;

    this.Fire.getOne<UserI>(PATH, id)
      .then((res) => {
        console.log(id);

        res.subscribe((user) => {
          if (user) {
            this.USUARIO_ACTUAL = user;
          }
        });
      })
      .catch((error) => {
        this.USUARIO_ACTUAL = {};
      });
  }

  get getID(): string {
    return this.USUARIO_ACTUAL.id!;
  }

  get getRol(): string {
    return this.USUARIO_ACTUAL.Rol!;
  }

  get getCompras(): compraI[] {
    return this.USUARIO_ACTUAL.compras!;
  }

  get GetName() {
    return this.USUARIO_ACTUAL.name!;
  }

  setUser() {
    this.USUARIO_ACTUAL = {};
  }
}
