import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  partenaires = [
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
    {
      lien: 'https://leotechint.com',
      nom: 'LEOTECH INT',
      logo: '/assets/img/logo2.png'
    },
  ]
  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {
    $('#carousel-example').on('slide.bs.carousel', function (e) {
      /*
          CC 2.0 License Iatek LLC 2018 - Attribution required
      */
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 5;
      var totalItems = $('#countme').length
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $('#countme').eq(i).appendTo('#prodinner'); /*not sure if prodinner is needed */
          }
          else {
            $('#countme').eq(0).appendTo('#prodinner');
          }
        }
      }
    });
    this.data.getPartenaires().subscribe(
      partenaires => {
        if (partenaires.length > 0) this.partenaires = partenaires
      }
    );
  }

  goTo(url) {
    window.open(url, '_blank');
  }

}
