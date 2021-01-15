import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

//SERVICES 
import { ProductosService, ProductosRules } from '../services/productos.service';

@Component({
  selector: 'app-relacionados',
  templateUrl: './relacionados.component.html',
  styleUrls: ['./relacionados.component.scss']
})
export class RelacionadosComponent implements OnInit {

  productos:ProductosRules[] =[];
  constructor(private _productos:ProductosService) { }

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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.productos = this._productos.getProductos();
  }

}
