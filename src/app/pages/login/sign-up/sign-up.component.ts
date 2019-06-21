import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/User.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
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
      name: new FormControl(null, [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordVerification: new FormControl(null, [Validators.required])
    });
  }

  public onSubmit(): void {
    const credencials = { ...this.profileForm.value };
    delete credencials.passwordVerification;
    this.userService.signUpUser(credencials);
  }
}
