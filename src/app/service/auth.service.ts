import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, User } from '@firebase/auth';
import { map } from 'rxjs';

import { UserI } from '../core/models/user';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: UserI = {};
  LOGGEDIN = false;
  constructor(private auth: AngularFireAuth, private router: Router) {}

  // sign in with google

  googleAuth() {
    this.LOGGEDIN = true;
    return this.authLogin(new GoogleAuthProvider());
  }

  // sign in with email and password
  Login(email: any, password: any): Promise<any> {
    this.LOGGEDIN = true;
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  registroUser(email: any, password: any) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  authLogin(provider: any) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('success', result);
        return result;
      })
      .catch((error) => console.log('ocurrio un eror') + error);
  }

  logOut() {
    this.auth.signOut().then((User) => {
      this.router.navigate(['/login']);
    });
  }

  // INFORMACION DEL USURIO LOGEADO
  getStateUser() {
    return this.auth.authState;
  }

  get getUid() {
    let id;
    this.getStateUser().subscribe((res) => {
      id = res?.uid;
      return id;
    });
    if (id) {
      return id;
    }
    console.log('el Uid no esta disponible -- archivo authservice');
    return null;
  }

  get getCurrentUser() {
    return this.auth.currentUser;
  }

  // userRol() {
  //   let rol = 'user' || 'admin';
  //   this.auth.authState.pipe(
  //     map(user=> Boolean(user && rol.includes(user.role)))
  //   )
  // }
}
