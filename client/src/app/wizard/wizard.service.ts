import {Inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Wizard} from './wizard';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WizardService {

  public subject = new BehaviorSubject<Wizard>(null);

  shippingDetails$: Observable<Wizard> = this.subject.asObservable();

  constructor(private http: HttpClient) {
  }

  shippingDetails(data: Wizard): void {
    this.subject.next(data);

  }
}
