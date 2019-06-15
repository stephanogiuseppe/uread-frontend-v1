import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { environment } from './../../../environments/environment';
import { StorageService } from './storage.service';
import { User } from '../models/User.model';

// TODO: refresh token
@Injectable({ providedIn: 'root' })
export class UserService {
  private STORAGE = 'localStorage';
  private USER_DATA = environment.dataStorage.user;
  private REGISTER_USER_URL = `${environment.api.baseUrl}/register`;
  private AUTH_URL = `${environment.api.baseUrl}/authenticate`;

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'auth_token'
    })
  };

  private authenticateUser = new BehaviorSubject<boolean>(false);
  public userIsAuthenticated = this.authenticateUser.asObservable();

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) {}

  private changeLogged(value): void {
    this.authenticateUser.next(value);
  }

  public signUpUser(user: User): void {
    this.http.post<any>(this.REGISTER_USER_URL, user, this.headers).subscribe(
      userCredentials => {
        this.storageService.setItemStorage(
          this.USER_DATA,
          JSON.stringify(userCredentials),
          this.STORAGE
        );
        this.changeLogged(true);
      },
      err => {
        this.signOutUser();
      }
    );
  }

  public signInUser(user: User): void {
    this.http.post<any>(this.AUTH_URL, user, this.headers).subscribe(
      userCredentials => {
        this.storageService.setItemStorage(
          this.USER_DATA,
          JSON.stringify(userCredentials),
          this.STORAGE
        );
        this.router.navigate(['/home']);
        this.changeLogged(true);
      },
      err => {
        this.signOutUser();
      }
    );
  }

  public signOutUser(): void {
    this.storageService.clearStorage(this.STORAGE);
    this.changeLogged(false);
  }

  verifyDataStorage(): void {
    const userDataLocalStorage = this.storageService.getValueFromKeyStorage(
      'userData'
    );
    if (userDataLocalStorage) {
      this.changeLogged(true);
    }
  }
}
