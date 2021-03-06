import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-galeria-empresa',
  templateUrl: './galeria-empresa.component.html',
  styleUrls: ['./galeria-empresa.component.scss']
})
export class GaleriaEmpresaComponent implements OnInit {

  constructor() { }

  customOptions: OwlOptions = {
    autoplay:true,
    autoplayTimeout:8000,
    loop: true,
    margin: 20,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  ngOnInit(): void {
  }

}
