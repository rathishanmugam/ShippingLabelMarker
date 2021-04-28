import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './login';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
const AUTH_DATA = 'auth_data';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): void {
          localStorage.setItem(AUTH_DATA, JSON.stringify({email, password}));
  }

}
