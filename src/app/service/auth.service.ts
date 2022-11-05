import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  // sign in with google

  googleAuth() {
    return this.authLogin(new GoogleAuthProvider());
  }

  // sign in with email and password
  Login(email: any, password: any): Promise<any> {
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

  getStateUser() {
    return this.auth.authState;
  }

  async getCurrentUser() {
    const user = await this.auth.currentUser;
    if (user === undefined) {
      console.log('usurio actual error');
      return null;
    } else {
      return user;
    }
  }

  async getUid() {
    const user = await this.auth.currentUser;
    if (user === undefined) {
      console.log('el Uid no esta disponible -- archivo authservice');
      return null;
    } else {
      return user?.uid;
    }
  }
}
