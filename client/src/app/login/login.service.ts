import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './login';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
const AUTH_DATA = 'auth_data';

@Injectable()
export class LoginService {

  private subject = new BehaviorSubject<User>(null);

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient) {

    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));

    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

    const user = localStorage.getItem(AUTH_DATA);

    if (user) {
      this.subject.next(JSON.parse(user));
    }

  }

  login(email: string, password: string): void {
          localStorage.setItem(AUTH_DATA, JSON.stringify({email, password}));
  }

  logout(): void {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
  }


}
