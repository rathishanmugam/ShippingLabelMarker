import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/wizard',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule),
  },
  {
    path: 'wizard',
    loadChildren: () => import('./wizard/wizard.module')
      .then(m => m.WizardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'shippingLabel',
    loadChildren: () => import('./shippingLabel/shippingLabel.module')
      .then(m => m.ShippingLabelModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
