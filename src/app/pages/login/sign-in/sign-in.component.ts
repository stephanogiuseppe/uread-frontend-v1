import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User.model';
import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
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
      emailFormControl: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      passwordFormControl: new FormControl('', [Validators.required])
    });
  }

  public ngOnDestroy(): void {
    this.translateServiceObservable.unsubscribe();
  }

  public onSubmit(): void {
    const credencials = new User(
      this.profileForm.value.emailFormControl,
      this.profileForm.value.passwordFormControl
    );
    this.userService.signInUser(credencials);
  }
}
