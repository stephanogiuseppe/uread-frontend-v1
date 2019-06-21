import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/shared/services/storage.service';
import { User } from 'src/app/shared/models/User.model';
import { UserService } from 'src/app/shared/services/user.service';
import { ChangeTranslateService } from 'src/app/shared/services/changeTranslate.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  private translateServiceObservable: Subscription;
  public userForm: FormGroup;
  public user: User;

  constructor(
    private translate: TranslateService,
    private userService: UserService,
    private storageService: StorageService,
    private changeTranslateService: ChangeTranslateService
  ) {
    this.setUser();

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

  public onSubmit(): void {
    const user = { ...this.userForm.value };
    this.userService
      .updateUser(this.user._id, user)
      .subscribe(userCredentials => {
        this.user = userCredentials;
        console.log('ret ->', userCredentials);

        this.storageService.setItemStorage(
          environment.dataStorage.user,
          JSON.stringify(userCredentials),
          'localStorage'
        );
      });
  }

  public setUser(): void {
    this.user = JSON.parse(localStorage.getItem('usrdt')).user;
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name),
      email: new FormControl(this.user.email),
      password: new FormControl(null),
      favoritePosts: new FormControl(this.user.favoritePosts),
      subscriptions: new FormControl(this.user.subscriptions)
    });
  }
}
