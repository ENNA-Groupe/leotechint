import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leotech',
  templateUrl: './leotech.component.html',
  styleUrls: ['./leotech.component.scss']
})
export class LeotechComponent implements OnInit {

  constructor(
    private data: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  rootTo(url){
    this.router.navigate(['/accueil/'+url]).then(
      () => {
        this.data.setMenu(url);
      }
    );
  }

}
