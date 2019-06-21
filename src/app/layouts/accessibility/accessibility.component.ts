import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.scss']
})
export class AccessibilityComponent implements OnInit {
  public homeRoute: boolean;

  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private router: Router
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  public ngOnInit(): void {}
}
