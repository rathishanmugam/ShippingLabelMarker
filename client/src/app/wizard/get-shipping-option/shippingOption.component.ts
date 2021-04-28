import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

enum ShippingOption {
  Ground = 1,
  Priority = 2
}

@Component({
  selector: 'shipping-option',
  templateUrl: 'shippingOption.component.html',
  styleUrls: ['shippingOption.component.css']
})
export class ShippingOptionComponent implements OnInit {
  public ShippingOptions = ShippingOption;
  form = this.fb.group({
    shippingOption: [ShippingOption.Ground, Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.form.valueChanges
      .subscribe(val => {
        console.log('shipping option ===>', val);

        const priceControl = this.form.controls['shippingOption'].value;
        console.log('shipping option ==form=>', val);

      });


  }

}
