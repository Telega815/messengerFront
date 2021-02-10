import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/User';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = 'http://localhost:8080/api';
  private REGISTRATION_URL = this.BASE_URL + '/registration';

  constructor(private http: HttpClient) { }

  postUser(user: User): Observable<any>{
    return this.http.post(this.REGISTRATION_URL, user);
  }
}
