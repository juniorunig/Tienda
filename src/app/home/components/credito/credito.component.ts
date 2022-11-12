import { Component, OnInit, DoCheck } from '@angular/core';
import { compraI } from 'src/app/core/models/compra';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css'],
})
export class CreditoComponent implements OnInit {
  COMPRAS: compraI[] = [];
  constructor(private fire: FirestoreService) {
    this.optenerCompras;
  }
  get optenerCompras() {
    this.fire.getAllCompras().subscribe((compras) => {
      if (compras) {
        compras.forEach((compra) => {
          if (compra) {
            this.COMPRAS.push(compra);
            return true;
          } else {
            return false;
          }
        });
      }
    });
    return false;
  }

  ngOnInit(): void {}
}
