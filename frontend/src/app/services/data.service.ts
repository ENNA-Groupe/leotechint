import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private menu = new BehaviorSubject<string>('');

  constructor() { }

  setMenu(str){
    this.menu.next(str);
  }

  getMenu(){
    return this.menu.asObservable();
  }
}
