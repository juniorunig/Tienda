import { Component, OnInit } from '@angular/core';
import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ROL_USER = 'user';
  constructor(private user: UserService) {
    this.ROL_USER = this.user.getRol;
    console.log(this.ROL_USER + '----');
  }

  ngOnInit(): void {}
}
