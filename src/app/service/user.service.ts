import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
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
    this.CargarDatos;
  }

  private getDatosUser(uid: string) {
    const PATH = 'users';
    const id = uid;

    this.Fire.getOne<UserI>(PATH, id).then((res) => {
      console.log(id);

      res.subscribe((user) => {
        if (user) {
          this.USUARIO_ACTUAL = user;
          console.log('ESTE ES EL HIJO DE PERRA ROL' + this.USUARIO_ACTUAL.Rol);
        }
      });
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
    this.USUARIO_ACTUAL.Rol = 'user';
    console.log('valor setiado');
    console.log(this.USUARIO_ACTUAL.Rol);
  }

  get CargarDatos(): boolean {
    this.auth.getStateUser().subscribe((user) => {
      if (user?.uid !== undefined) {
        console.log('opteniendo datos del usuario');
        this.getDatosUser(user!.uid);
        return true;
      } else {
        return false;
      }
    });
    return false;
  }

  get getCredito() {
    return this.USUARIO_ACTUAL.credito;
  }
}
