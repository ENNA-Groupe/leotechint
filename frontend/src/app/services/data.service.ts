import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private menu = new BehaviorSubject<string>('');
 private carousels = new BehaviorSubject<any[]>([]);
 private partenaires = new BehaviorSubject<any[]>([]);
 private services = new BehaviorSubject<any[]>([]);

  constructor() { }

  //Menu
  setMenu(str){
    this.menu.next(str);
  }

  getMenu(){
    return this.menu.asObservable();
  }

  //Carousels
  setCarousels(data){
    this.carousels.next(data);
  }

  getCarousels(){
    return this.carousels.asObservable();
  }

  //Partenaires
  setPartenaires(data){
    this.partenaires.next(data);
  }

  getPartenaires(){
    return this.partenaires.asObservable();
  }

  //Services
  setServices(data){
    this.services.next(data);
  }

  getServices(){
    return this.services.asObservable();
  }

}
