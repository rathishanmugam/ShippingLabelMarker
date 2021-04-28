import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'shippingLabel',
  templateUrl: './shippingLabel.component.html',
  styleUrls: ['./shippingLabel.component.css']
})
export class ShippingLabelComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router){
  }

  ngOnInit(): void {

  }
}
