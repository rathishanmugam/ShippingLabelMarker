import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'receiver-address',
  templateUrl: './receiverAddress.component.html',
  styleUrls: ['./receiverAddress.component.css']
})
export class ReceiverAddressComponent implements OnInit {

  form = this.fb.group({
    address: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    const draft = localStorage.getItem('RECEIVER-ADDRESS');

    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid)
      )
      .subscribe( val => localStorage.setItem('RECEIVER-ADDRESS', JSON.stringify(val)));


  }
}
