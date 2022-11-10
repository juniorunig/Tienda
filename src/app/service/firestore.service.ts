import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserI } from '../core/models/user';
import { collection, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { collectionData, Firestore, updateDoc } from '@angular/fire/firestore';
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
      return;
    }
    this.createDoc(user, this.pathUser, user.id)
      .then((inf) => {
        console.log('todo correcto desde el fireservice');
      })
      .catch((error) => {
        console.log('fire service : error de saveuser');
      });
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

  async getOne<tipo>(path: string, id: string) {
    // const docRef = doc(this.fire, `${this.pathUser}/${id}`);
    // return getDoc(docRef);
    return this.firestore.collection(path).doc<tipo>(id).valueChanges();
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

  upDateProduct(product: ProductoI) {
    const id = product.id;
    console.log(id);

    return this.firestore.collection(this.pathProducts).doc(id).update(product);
  }

  eliminar(product?: ProductoI, categoria?: CategoriaI) {
    if (product !== undefined) {
      const productRef = doc(this.fire, `${this.pathProducts}/${product.id}`);
      return deleteDoc(productRef);
    }
    if (categoria !== undefined) {
      const categoriRef = doc(
        this.fire,
        `${this.pathCategories}/${categoria.id}`
      );
      return deleteDoc(categoriRef);
    }
    return null;
  }

  Save(product?: ProductoI, categoria?: CategoriaI) {
    if (product?.id !== undefined && product !== null) {
      this.createDoc(product, this.pathProducts, product?.id)
        .then((inf) => {
          console.log('todo correcto desde el fireservice save');
        })
        .catch((error) => {
          console.log('fire service : error de saveProduct');
        });
    }
  }

  GenerarId() {
    return this.firestore.createId();
  }

  existe(email: string) {
    let existe = false;
    if (email !== undefined) {
      const res = this.getAllUser().subscribe((usuarios) => {
        usuarios.forEach((us) => {
          if (us.Email === email) {
            console.log('el usurio existe');
            existe = true;
            return;
          }
        });
      });
    }

    return existe;
  }
}
