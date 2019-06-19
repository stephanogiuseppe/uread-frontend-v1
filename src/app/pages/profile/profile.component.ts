import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { User } from 'src/app/shared/models/User.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public userForm: FormGroup;
  public user: User;
  public filterOption: boolean;
  public closeSubject: Subject<boolean> = new Subject<boolean>();

  constructor(
    private translate: TranslateService,
    private userService: UserService
  ) {
    translate.setDefaultLang('pt-br');
    translate.use('pt-br');
  }

  public ngOnInit(): void {
    this.userForm = new FormGroup({
      nameFormControl: new FormControl(null)
    });
  }

  public onSubmit(): void {
    this.updateUser();
  }

  /*
    {
      "name": "Nm",
      "email": "email@email",
      "password": "123",
      "favoritePosts": [],
      "subscriptions": []
    }
  */
  public updateUser(): void {
    this.userService
      .updateUser(this.user)
      .subscribe(user => (this.user = user));
  }

  public emitEventCloseToModalRight(): void {
    this.closeSubject.next(true);
  }
  public onChangeFilterOptionsBox(option): void {
    this[option] = !this[option];
  }
  public onChangeOpenFilterOption(): void {
    this.filterOption = true;
  }
}
