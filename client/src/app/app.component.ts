import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {map} from "rxjs/operators";
import {BehaviorSubject, Observable} from "rxjs";
const AUTH_DATA = 'auth_data';
export interface User {
  id: string;
  email: string;
  pictureUrl: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  private subject = new BehaviorSubject<User>(null);

  user$: Observable<User> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor( private router: Router) {

  }

  ngOnInit(): void {
    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
    this.isLoggedIn$ = this.user$.pipe(map(users => !!users));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
  }

  logout(): void {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
    this.router.navigateByUrl('/login');


  }

}
