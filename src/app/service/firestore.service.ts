import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserI } from '../core/models/user';
import { collection, deleteDoc, doc } from 'firebase/firestore';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CategoriaI } from '../core/models/categoria';
import { ProductoI } from '../core/models/producto';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  pathUser = 'users';
  pathCategories = 'categories';
  pathProducts = 'products';
  constructor(private firestore: AngularFirestore, private fire: Firestore) {}

  savesUser(user: UserI) {
    if (user.id === undefined) {
      console.log('usuario nulo');

      return;
    } else {
      this.createDoc(user, this.pathUser, user.id)
        .then((inf) => {
          console.log('todo correcto desde el fireservice');
        })
        .catch((error) => {
          console.log('fire service : error de saveuser');
        });
    }
  }

  private createDoc(data: any, path: string, id: string) {
    const collection = this.firestore.collection(path);
    return collection.doc(id).set(data);
  }

  getAllUser(): Observable<UserI[]> {
    const UserRef = collection(this.fire, this.pathUser);
    return collectionData(UserRef, { idField: 'id' }) as Observable<UserI[]>;
  }

  DeleteUser(user: UserI) {
    const userRef = doc(this.fire, `${this.pathUser}/${user.id}`);
    return deleteDoc(userRef);
  }

  getOneUser(id: string) {
    let us: UserI[] = [];
    this.getAllUser().subscribe((user) => {
      us = user.filter((user) => {
        user.id === id;
      });
    });

    return us[0];
  }

  getAllCategories(): Observable<CategoriaI[]> {
    const UserRef = collection(this.fire, this.pathCategories);
    return collectionData(UserRef, { idField: 'id' }) as Observable<
      CategoriaI[]
    >;
  }

  getAllProductos(): Observable<ProductoI[]> {
    const UserRef = collection(this.fire, this.pathProducts);
    return collectionData(UserRef, { idField: 'id' }) as Observable<
      ProductoI[]
    >;
  }
}
