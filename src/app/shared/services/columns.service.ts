import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { environment } from './../../../environments/environment';
import { Column } from '../models/Column.model';

@Injectable({ providedIn: 'root' })
export class ColumnsService {
  private COLUMN_URL = `${environment.api.baseUrl}/columns`;

  private headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('usrdt')).token
    })
  };

  private authenticateUser = new BehaviorSubject<boolean>(false);
  public userIsAuthenticated = this.authenticateUser.asObservable();

  constructor(private http: HttpClient) {}

  public createColumn(column: Column): Observable<any> {
    return this.http.post<any>(this.COLUMN_URL, column, this.headers);
  }

  public getColumns(): Observable<any> {
    return this.http.get<any>(this.COLUMN_URL, this.headers);
  }

  public getColumnBySubscriptions(): Observable<any> {
    return this.http.get<any>(`${this.COLUMN_URL}/subscriptions`, this.headers);
  }

  public getColumnsByName(search: string): Observable<any> {
    return this.http.get<any>(
      `${this.COLUMN_URL}/search/${search}`,
      this.headers
    );
  }

  public subscribeColumn(columnId: string): Observable<any> {
    return this.http.put<any>(
      `${this.COLUMN_URL}/${columnId}/subscribe`,
      {},
      this.headers
    );
  }

  public unsubscribeColumn(columnId: string): Observable<any> {
    return this.http.put<any>(
      `${this.COLUMN_URL}/${columnId}/unsubscribe`,
      {},
      this.headers
    );
  }
}
