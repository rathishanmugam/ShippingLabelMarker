import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShippingLabelComponent} from './shippingLabel.component';
const routes: Routes = [
  {
    path: '',
    component: ShippingLabelComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class ShippingLabelRoutingModule {

}
