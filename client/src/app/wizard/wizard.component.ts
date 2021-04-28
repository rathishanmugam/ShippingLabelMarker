import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {ActivatedRoute, Router} from '@angular/router';
import {WizardService} from './wizard.service';
import {Wizard} from './wizard';
import {Subscription} from 'rxjs';

@Component({
  selector: 'wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    }
  ]
})
export class WizardComponent implements OnInit, OnDestroy {
 public obj;
  sub: Subscription;
  form: FormGroup;
shippingOption: Wizard;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: WizardService){
  }

  ngOnInit(): void {
    this.sub = this.service.shippingDetails$.subscribe(option => {
      this.shippingOption = option;
      console.log('SUBSCRIPTION========>', this.shippingOption);
    });
    this.obj = {
      from: {
        name: "John Smith", street: "131 Dartmouth St", city: "Boston",
        state: "MA", zip: "02116"
      },
      to: {
        name: "Linda Jackson", street: "40 Fulton St", city: "New York", state: "NY",
        zip: "10038"
      },
      weight: 2,
      shippingOption: 1
    };
  }
  submit(step1, step2, step3, step4, step5): void {
    console.log(step1, step2, step3, step4, step5);
    console.log(' iam in out ====>', step1.address.name, step1.address.city);
    this.router.navigate(['wizard']);
    // {relativeTo: this.route.parent});

  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}






