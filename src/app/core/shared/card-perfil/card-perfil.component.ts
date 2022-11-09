import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.css'],
})
export class CardPerfilComponent implements OnInit {
  perfilUrl: string = '/assets/img/cr7-perfil.png';
  name: string = 'no existe user';
  defaultImg: string = '/assets/img/cr7-perfil.png';
  user2: any;
  user: UserI = {};
  constructor(
    private auth: AuthService,
    private router: Router,
    private fire: FirestoreService
  ) {}

  ngOnInit(): void {
    // this.getDataUser();
    this.getUser();
  }

  toogleMenu() {
    let submenu = document.getElementById('subMenu');
    submenu?.classList.toggle('sub-menu-container-open');
  }

  cerrarSesion() {
    this.auth.logOut();
  }

  getDataUser() {
    this.auth.getStateUser().subscribe((res) => {
      this.user2 = res;
      if (res !== null) {
        this.user.name = res.displayName!;
        if (typeof res.photoURL != undefined) {
          // this.user.photoUrl = res.photoURL!;
          console.log('imagen encontrada');
        }
        console.log('se optuvo el nombre');
      } else {
        console.log('no se encontraron datos');
      }
    });
  }

  async getUser() {
    const user2 = await this.auth.getStateUser().subscribe((user) => {
      // this.user.photoUrl = user?.photoURL!;

      this.user.name = user?.displayName!;
      this.user.photoUrl = this.perfilUrl;
    });
  }
}
