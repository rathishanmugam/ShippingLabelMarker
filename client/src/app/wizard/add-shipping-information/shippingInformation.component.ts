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
      from: {...step1.address},
      to: {...step2.address},
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
