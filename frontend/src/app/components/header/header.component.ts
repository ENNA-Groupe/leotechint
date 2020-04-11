import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  menu: string;
  sub: Subscription;

  constructor(
    private router: Router,
    private data:DataService
  ) {
   }

  ngOnInit(): void {
    this.sub = this.data.getMenu().subscribe(
      (menu) => {
        this.menu = menu;
      }
    );
    this.data.setMenu('');
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


  initializeMenu(){
    this.data.setMenu('');
  }


}
