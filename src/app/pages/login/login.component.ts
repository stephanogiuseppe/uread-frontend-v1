import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isSignIn = true;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  public ngOnInit(): void {}

  public changeFormSignIn(): void {
    this.isSignIn = !this.isSignIn;
  }
}
