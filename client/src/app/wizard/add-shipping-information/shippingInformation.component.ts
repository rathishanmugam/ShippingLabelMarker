import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ActivatedRoute, Router} from '@angular/router';
import {WizardService} from '../wizard.service';
enum ShippingOption {
  Ground = 1,
  Priority = 2
}
@Component({
  selector: 'shipping-info',
  templateUrl: './shippingInformation.component.html',
  styleUrls: ['./shippingInformation.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    }
  ]
})
export class AddShippingInformationComponent implements OnInit {
  public obj;
  public ShippingOptions = ShippingOption;

  form: FormGroup;
  private shippingCost;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: WizardService){
  }

  ngOnInit(): void {

  }
  submit(step1, step2, step3, step4): void {
    console.log(step1, step2, step3, step4);
    const shippingRate = 0.50;
    this.shippingCost = Math.floor(parseInt(step3.weight, 10) * shippingRate * parseInt(step4.shippingOption, 10));
    console.log('THE SHIPING COST ======>', this.shippingCost);
    this.obj = {
      from: {
        name: step1.address.name,
        street: step1.address.street,
        city: step1.address.city,
        state: step1.address.state,
        zip: step1.address.zipCode
      },
      to: {
        name: step2.address.name,
        street: step2.address.street,
        city: step2.address.city,
        state: step2.address.state,
        zip: step2.address.zipCode
      },
      weight: step3.weight,
      shippingOption: step4.shippingOption,
      shippingCost: this.shippingCost
    };
    this.service.shippingDetails(this.obj);
    console.log(' shipping details ====>', JSON.stringify(this.obj, null, 2));

    this.router.navigate(['wizard']);
    // {relativeTo: this.route.parent});

  }
}
