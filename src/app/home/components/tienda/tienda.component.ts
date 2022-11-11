import { Component, Input, OnInit } from '@angular/core';
import { tiendaI } from 'src/app/core/models/tienda';
import { UserI } from 'src/app/core/models/user';
import { AuthService } from 'src/app/service/auth.service';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
})
export class TiendaComponent implements OnInit {
  PERMISO = 'user';
  TITULO = 'TIENDAS';
  user: UserI = {};
  ROL: 'user' | 'admin' = 'user';
  ID: any = this.user.id;
  HABILITAR_PAGE = false;
  tiendas: tiendaI[] = [
    {
      id: '24',
      nombre: 'el pepe',
      descripcion: 'la mejor tienda ever',
      direccion: 'calle 14b crr32-21',
      propietario: 'pepe',
    },
  ];

  constructor(private firestore: FirestoreService, private auth: AuthService) {
    this.auth.getStateUser().subscribe((res) => {
      if (res) {
        this.getDatosUser(res.uid);
      }
    });
  }

  ngOnInit(): void {}

  getDatosUser(uid: string) {
    const PATH = 'users';
    const id = uid;

    this.firestore.getOne<UserI>(PATH, id).then((res) => {
      console.log(id);

      res.subscribe((user) => {
        if (user) {
          if (user?.Rol === 'user' || user.Rol === 'admin') {
            console.log(user.Rol);
            this.PERMISO = user.Rol;
          }
        }
      });
    });
  }
}
