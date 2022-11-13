import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { FirestoreService } from 'src/app/service/firestore.service';
import { UserService } from 'src/app/service/user.service';
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
  constructor(private auth: AuthService, private userServices: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  toogleMenu() {
    let submenu = document.getElementById('subMenu');
    submenu?.classList.toggle('sub-menu-container-open');
  }

  cerrarSesion() {
    this.auth.logOut();
  }

  async getUser() {
    const user2 = await this.auth.getStateUser().subscribe((user) => {
      this.user.name = user?.displayName!;
      this.user.photoURl =
        user?.photoURL === undefined ? this.perfilUrl : user?.photoURL!;
      this.user.id = user?.uid!;
    });
  }
}
