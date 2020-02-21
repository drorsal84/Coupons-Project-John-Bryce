import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public token = new BehaviorSubject<string>("token");
  activeUser = this.token.asObservable();

  public email = new BehaviorSubject<string>("friend :)");
  activeUser1 = this.email.asObservable();

  constructor() { }

  changeData(token: string) {
    this.token.next(token);
  }

  changeMessege(email: string) {
    this.email.next(email);
  }
}