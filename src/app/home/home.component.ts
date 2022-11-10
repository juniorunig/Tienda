import { Component, OnInit, ViewChild } from '@angular/core';
import { UserI } from '../core/models/user';
import { AuthService } from '../service/auth.service';
import { FirestoreService } from '../service/firestore.service';
import { TiendaComponent } from './components/tienda/tienda.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService, private firestore: FirestoreService) {}

  ngOnInit(): void {
    this.SaveUser();
  }

  SaveUser() {
    const usuario: UserI = {};

    this.auth.getStateUser().subscribe((us) => {
      if (us !== null) {
        usuario.id = us.uid!;
        usuario.name = us.displayName!;
        usuario.Email = us.email!;
        if (usuario.Email !== undefined) {
          this.firestore.existe(usuario.Email);
          return;
        }
        usuario.photoUrl = us.photoURL!;
        usuario.Rol = 'user';
        this.firestore.savesUser(usuario);
      }
    });
  }
}
