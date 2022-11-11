import { Component, OnInit } from '@angular/core';
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
    this.fire.getAllCompras().subscribe((compras) => {
      if (compras) {
        compras.forEach((compra) => {
          if (compra) {
            this.COMPRAS.push(compra);
          }
        });
      }
    });
  }

  ngOnInit(): void {}
}
