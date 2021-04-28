import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {MaterialModule} from '../shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {LoginRoutingModule} from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule {
}
