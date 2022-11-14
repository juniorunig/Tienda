import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserI } from '../core/models/user';
import { collection, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { collectionData, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { CategoriaI } from '../core/models/categoria';
import { ProductoI } from '../core/models/producto';
import { compraI } from '../core/models/compra';
import { tiendaI } from '../core/models/tienda';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  pathUser = 'users';
  pathCategories = 'categories';
  pathProducts = 'products';

  pathCompras = 'compras';
  pathTienda = 'tiendas';
  constructor(private firestore: AngularFirestore, private fire: Firestore) {}

  savesUser(user: UserI) {
    console.log(user.Rol + 'roooooooooooooool');

    if (user.id == undefined) {
      return;
    }
    if (user.Rol === 'admin') {
      user.Rol = 'admin';
    }

    this.createDoc(user, this.pathUser, user.id!)
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
    console.log(user);

    const userRef = doc(this.fire, `${this.pathUser}/${user.id}`);
    return deleteDoc(userRef);
  }

  upDateUSer(user: UserI) {
    const id = user.id;
    return this.firestore.collection(this.pathUser).doc(id).update(user);
  }

  async getOne<tipo>(path: string, id: string) {
    // const docRef = doc(this.fire, `${this.pathUser}/${id}`);
    console.log(path + id + '++++++++');

    // return getDoc(docRef);
    return await this.firestore.collection(path).doc<tipo>(id).valueChanges();
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

  Save(product?: ProductoI, categoria?: CategoriaI, compra?: compraI) {
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

  SaveCompras(compra?: compraI) {
    if (compra?.id !== undefined && compra !== null) {
      this.createDoc(compra, this.pathCompras, compra?.id)
        .then((inf) => {
          console.log('todo correcto desde el fireservice  con la compra');
        })
        .catch((error) => {
          console.log('fire service : error de saveProduct');
        });
    }
  }

  getAllCompras(): Observable<compraI[]> {
    const UserRef = collection(this.fire, this.pathCompras);
    return collectionData(UserRef, { idField: 'id' }) as Observable<compraI[]>;
  }

  getALLComprasPenidentes(): compraI[] {
    let comprasFiltro: compraI[] = [];
    this.getAllCompras().subscribe((compras) => {
      comprasFiltro = compras.filter((compra) => {
        compra.estado == 'pendiente';
      });
    });
    return comprasFiltro;
  }

  upDateEstadoCompra(compra: compraI) {
    const id = compra.id;
    return this.firestore.collection(this.pathCompras).doc(id).update(compra);
  }

  // TIENDAS

  getAllTienda(): Observable<tiendaI[]> {
    const UserRef = collection(this.fire, this.pathTienda);
    return collectionData(UserRef, { idField: 'id' }) as Observable<tiendaI[]>;
  }
}
