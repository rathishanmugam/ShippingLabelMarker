import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'weight',
  templateUrl: 'weight.component.html',
  styleUrls: ['weight.component.css']
})
export class WeightComponent implements OnInit {

  form = this.fb.group({
    weight: [null, [
      Validators.required,
      Validators.min(1),
      Validators.max(9999),
      Validators.pattern('[0-9]+')
    ]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(val => {
        // const weightControl = this.form.controls['weight'];
        console.log('weight ===>', val);
      });
  }
  get weight(){
    return this.form.controls['weight'];
  }

}
