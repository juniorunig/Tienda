import { Component, OnInit, DoCheck } from '@angular/core';
import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ROL_USER = '';
  constructor(private user: UserService) {
    this.ROL_USER = this.user.getRol;
  }

  ngOnInit(): void {
    // this.ROL_USER = this.user.getRol;
  }

  ngDoCheck(): void {
    this.ROL_USER = this.user.getRol;
  }
}
