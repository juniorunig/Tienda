import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ProductoI } from 'src/app/core/models/producto';
import { FirestoreService } from 'src/app/service/firestore.service';
import { ModalEditComponent } from './components';

@Component({
  selector: 'app-crud-product',
  templateUrl: './crud-product.component.html',
  styleUrls: ['./crud-product.component.css'],
})
export class CrudProductComponent implements OnInit {
  CABECERAS_PRODUCTS = ['nombre', 'categoria', 'precio', 'unidad', 'marca'];
  CABECERA_CATEGORIES = ['nombre'];
  CABECERA_USURIO = [''];
  productUp: ProductoI = {};
  products: ProductoI[] = [];

  @ViewChild(ModalEditComponent) modalEdit: any;

  Items: any[] = [];
  @Input() cabeceras: string = '';
  constructor(private firesore: FirestoreService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  async DeleteProduct(product: ProductoI) {
    let newlist = this.products;
    console.log('se va eliminar');

    newlist = newlist.filter((res) => res.id !== product.id);
    this.products = newlist;

    await this.firesore.eliminar(product)?.then((res) => {
      console.log('eliminado con exito');
    });
  }

  updateProdect(product: ProductoI) {
    this.modalEdit.upproduct = product;
    console.log(product.id);

    this.modalEdit.setCampos();
  }

  cargarProductos() {
    this.firesore.getAllProductos().subscribe((items) => {
      if (items !== null) {
        items.forEach((product) => {
          this.products.push(product);
        });
      }
    });
  }
}
