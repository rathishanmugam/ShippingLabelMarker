import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'confirm',
  templateUrl: 'confirm.component.html',
  styleUrls: ['confirm.component.css']
})
export class ConfirmComponent implements OnInit{
  constructor(private fb: FormBuilder) {
  }
  // public shippingRates = 0.40;
  // shippingCost = step4.form.value * shippingRate *
  //   (shippingOption === ShippingOption.ground ? 1 : 1.5);
  form = this.fb.group({
    shippingRate: [null, [
      Validators.required,
      Validators.min(1),
      Validators.max(9999),
      Validators.pattern('[0-9]+')
    ]]
  });
  ngOnInit(): void {
    this.form.valueChanges
      .subscribe(val => {
        const weightControl = this.form.controls['shippingRate'];
      });
  }
  get shippingRate(){
    return this.form.controls['shippingRate'];
  }
}



