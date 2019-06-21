import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User.model';
import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  private user: User;
  public profileForm: FormGroup;

  constructor(
    private translate: TranslateService,
    private userService: UserService,
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

  public ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordVerification: new FormControl(null, [Validators.required])
    });
  }

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
  }

  public onSubmit(): void {
    const credencials = { ...this.profileForm.value };
    delete credencials.passwordVerification;
    this.userService.signUpUser(credencials);
  }
}
