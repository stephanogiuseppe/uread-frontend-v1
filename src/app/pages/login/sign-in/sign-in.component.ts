import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  private user: User;
  public profileForm: FormGroup;

  constructor(
    private translate: TranslateService,
    private userService: UserService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
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

  public onSubmit(): void {
    const credencials = new User(
      this.profileForm.value.emailFormControl,
      this.profileForm.value.passwordFormControl
    );
    this.userService.signInUser(credencials);
    console.warn(this.profileForm);
  }
}
