import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder, FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  Validators
} from '@angular/forms';
import {noop, Subscription} from 'rxjs';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressFormComponent
    }
  ]
})
export class AddressFormComponent implements ControlValueAccessor, OnDestroy {

  @Input()
  legend: string;
  onChangeSub: Subscription;
  form: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    street: [null, [Validators.required]],
    city: [null, [Validators.required]],
    state: [null, [Validators.required]],
    zipCode: [null, [Validators.required]],
  });
  onTouched = () => {};

  constructor(private fb: FormBuilder) {

  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.form.valueChanges.subscribe(onChange);
  }

  ngOnDestroy(): void {
    this.onChangeSub.unsubscribe();
  }


  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value);
    }
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    if (disabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }

  }

}















