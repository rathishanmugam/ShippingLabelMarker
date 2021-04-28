import {Component, OnDestroy, OnInit} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
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
shippingOption: Wizard;
  constructor(
    private service: WizardService){
  }

  ngOnInit(): void {
    this.sub = this.service.shippingDetails$.subscribe(option => {
      this.shippingOption = option;
      console.log('SUBSCRIPTION========>', this.shippingOption);
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}






