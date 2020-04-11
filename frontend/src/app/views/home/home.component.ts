import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  carousels = [
    {
      image: "./assets/img/img1.jpg",
      titre: "Titre 1",
      description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    },
    {
      image: "./assets/img/img2.jpg",
      titre: "Titre 2",
      description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    },{
      image: "./assets/img/img3.jpg",
      titre: "Titre 3",
      description:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."
    }
  ]

  constructor(
    private  data: DataService
  ) { }

  ngOnInit(): void {
    // $('.carousel').carousel();
    this.data.getCarousels().subscribe(
      carousels  => {
        if (carousels.length>0) this.carousels = carousels;
      }
    );
  }

}
