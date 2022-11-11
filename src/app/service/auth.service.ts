import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider, User } from '@firebase/auth';

import { UserI } from '../core/models/user';
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
    this.LOGGEDIN = false;
    this.auth.signOut().then((User) => {
      this.router.navigate(['/login']);
    });
  }

  getStateUser() {
    return this.auth.authState;
  }

  getUid() {
    let id;
    this.getStateUser().subscribe((res) => {
      id = res?.uid;
      return id;
    });
    if (id) {
      console.log(+'+++++++');
      return id;
    }
    console.log('el Uid no esta disponible -- archivo authservice');
    return null;
  }

  get getCurrentUser() {
    return this.auth.currentUser;
  }
}
