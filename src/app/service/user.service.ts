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

  constructor(private auth: AuthService, private Fire: FirestoreService) {}

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

  set Setuser(user: UserI) {
    this.USUARIO_ACTUAL = user;
    console.log(this.USUARIO_ACTUAL);
  }

  get user() {
    return this.USUARIO_ACTUAL;
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
        this.getDatosUser(user!.uid);
        return true;
      } else {
        return false;
      }
    });
    return false;
  }

  SaveUser() {
    console.log(this.USUARIO_ACTUAL);
    this.Fire.savesUser(this.USUARIO_ACTUAL);
  }
  get getCredito() {
    return this.USUARIO_ACTUAL.credito;
  }

  get gerDeuda() {
    return this.USUARIO_ACTUAL.deuda;
  }

  get DatosParaCredito() {
    const direccion = this.USUARIO_ACTUAL.address!;
    const telefono = this.USUARIO_ACTUAL.numberPhone!;
    if (direccion?.length < 5 || telefono?.length < 10) {
      return true;
    }
    return false;
  }

  establcerCodigo(codigo: string) {
    this.USUARIO_ACTUAL.codigo = codigo;
  }
  userdataCredito(user: UserI) {
    this.Fire.upDateUSer(user).then((res) => {
      console.log('se enviaron los datos del credito');
    });
  }

  consultarCredito(id: string) {
    const PATH = 'users';
    const uid = id;
    this.Fire.getOne<UserI>(PATH, uid).then((res) => {
      res.subscribe((user) => {
        return user!.credito;
      });
    });
  }
}
