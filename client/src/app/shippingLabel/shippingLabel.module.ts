import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ShippingLabelComponent} from './shippingLabel.component';
import {MaterialModule} from '../shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ShippingLabelRoutingModule} from './shippingLabel-routing.module';

@NgModule({
  declarations: [ShippingLabelComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ShippingLabelRoutingModule
  ],
  providers: [
  ]
})
export class ShippingLabelModule {
}
