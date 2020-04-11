import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit, OnDestroy {
  menu: string;
  services = [
    {
      titre: 'INFORMATIQUE ET TELECOMMUNICATION',
      image: './assets/img/img3.jpg',
      type: 'int',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi laboriosam deleniti, eveniet nulla quam commodi delectus odio, aut corporis quibusdam voluptas ullam voluptate nobis sit ipsum beatae sunt esse.'
    },
    {
      titre: 'GENIE LOGICIEL',
      image: './assets/img/img3.jpg',
      type: 'home',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi laboriosam deleniti, eveniet nulla quam commodi delectus odio, aut corporis quibusdam voluptas ullam voluptate nobis sit ipsum beatae sunt esse.'
    },
    {
      titre: 'NUMERISATION/ARCHIVAGE DE DONNEES',
      image: './assets/img/img3.jpg',
      type: 'corporate',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi laboriosam deleniti, eveniet nulla quam commodi delectus odio, aut corporis quibusdam voluptas ullam voluptate nobis sit ipsum beatae sunt esse.'
    },
    {
      titre: 'EQUIPEMENT DE SECURITE ET SURVEILLANCE',
      image: './assets/img/img3.jpg',
      type: 'home',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi laboriosam deleniti, eveniet nulla quam commodi delectus odio, aut corporis quibusdam voluptas ullam voluptate nobis sit ipsum beatae sunt esse.'
    },
    {
      titre: 'SON & LUMIERE',
      image: './assets/img/img3.jpg',
      type: 'corporate',
      description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi laboriosam deleniti, eveniet nulla quam commodi delectus odio, aut corporis quibusdam voluptas ullam voluptate nobis sit ipsum beatae sunt esse.'
    },
  ]
  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {

  }

  ngOnInit(): void {
    this.menu = this.route.snapshot.params['menu'];
    this.data.setMenu(this.menu);
    this.data.getServices().subscribe(
      services => {
        if (services.length>0) this.services = services;
      }
    );
  }

  ngOnDestroy() {
    this.data.setMenu('int');
  }

}
