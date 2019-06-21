import { Component, OnInit, OnDestroy } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  public isSignIn = true;

  constructor(
    private translate: TranslateService,
    private changeTranslateService: ChangeTranslateService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use(this.changeTranslateService.currentLanguage);

    this.translateServiceObservable = this.changeTranslateService.language$.subscribe(
      (language: string) => {
        translate.use(language);
      }
    );
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
  }

  public changeFormSignIn(): void {
    this.isSignIn = !this.isSignIn;
  }
}
