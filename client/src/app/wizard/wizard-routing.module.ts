import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WizardComponent} from './wizard.component';
import {AddShippingInformationComponent} from './add-shipping-information/shippingInformation.component';

const routes: Routes = [
  {
    path: '',
    component: WizardComponent
  },
  {
    path: 'shippingInfo/add-shippingInfo',
    component: AddShippingInformationComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
  ]
})
export class WizardRoutingModule {

}
