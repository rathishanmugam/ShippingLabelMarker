import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {Router} from '@angular/router';
import {LoginService} from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: LoginService) {

    this.form = fb.group({
      email: ['test@test.com', [Validators.required]],
      password: ['test', [Validators.required]]
    });

  }

  ngOnInit(): void {

  }

  login(): void {
    const val = this.form.value;
    this.auth.login(val.email, val.password);
    this.router.navigateByUrl('/wizard');
  }

}
