import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WizardComponent} from './wizard.component';
import {MaterialModule} from '../shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {WizardRoutingModule} from './wizard-routing.module';
import {AddressFormComponent} from './address-form/address-form.component';
import {ReceiverAddressComponent} from './get-receiver-address/receiverAddress.component';
import {SenderAddressComponent} from './get-sender-address/senderAddress.component';
import {WeightComponent} from './get-weight/weight.component';
import {ShippingOptionComponent} from './get-shipping-option/shippingOption.component';
import {ConfirmComponent} from './confirm/confirm.component';
import {AddShippingInformationComponent} from './add-shipping-information/shippingInformation.component';
import {WizardService} from './wizard.service';

@NgModule({
  declarations: [
    WizardComponent,
    AddressFormComponent,
    ReceiverAddressComponent,
    SenderAddressComponent,
    WeightComponent,
    ShippingOptionComponent,
    ConfirmComponent,
    AddShippingInformationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    WizardRoutingModule
  ],
  providers: [
    WizardService
  ]
})
export class WizardModule {
}
