import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { environment } from './../../../environments/environment';
import { StorageService } from './storage.service';
import { Post } from '../models/Post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private STORAGE = 'localStorage';
  private USER_DATA = environment.dataStorage.user;
  private POST_URL = `${environment.api.baseUrl}/posts`;

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('usrdt')).token
    })
  };

  private authenticateUser = new BehaviorSubject<boolean>(false);
  public userIsAuthenticated = this.authenticateUser.asObservable();

  constructor(private http: HttpClient) {}

  public createPost(post: Post): Observable<any> {
    return this.http.post<any>(this.POST_URL, post, this.headers);
  }

  public getPosts(): Observable<any> {
    return this.http.get<any>(this.POST_URL, this.headers);
  }
}
