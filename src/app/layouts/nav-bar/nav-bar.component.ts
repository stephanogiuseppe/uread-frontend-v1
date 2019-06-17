import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public homeRoute: boolean;

  constructor(
    private translate: TranslateService,
    private userService: UserService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  public ngOnInit(): void {}

  public logOut(): void {
    this.userService.signOutUser();
  }
}
