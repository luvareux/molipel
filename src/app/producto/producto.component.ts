import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from "@angular/router";

// SERVICES
import {ProductosService} from "../services/productos.service"

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  producto:any[] = [];

  constructor(private ParamsRouter:ActivatedRoute, private productoService:ProductosService ) { 
    this.ParamsRouter.params.subscribe(params=>{
      this.producto = this.productoService.getProducto(params['id']);
    });
  }

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
    nav: false
  }


  ngOnInit(): void {
  }

}
