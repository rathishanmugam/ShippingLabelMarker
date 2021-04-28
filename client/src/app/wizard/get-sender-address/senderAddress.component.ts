import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'sender-address',
  templateUrl: './senderAddress.component.html',
  styleUrls: ['./senderAddress.component.css']
})
export class SenderAddressComponent implements OnInit {

  form = this.fb.group({
    address: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    const draft = localStorage.getItem('SENDER-ADDRESS');

    if (draft) {
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid)
      )
      .subscribe( val => localStorage.setItem('SENDER-ADDRESS', JSON.stringify(val)));


  }
}
