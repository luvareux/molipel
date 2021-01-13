import { Component, OnInit } from '@angular/core';

//SERVICES 
import { ProductosService, ProductosRules } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos:ProductosRules[] =[];

  constructor(private _productos:ProductosService) { }

  ngOnInit(): void {
    this.productos = this._productos.getProductos();
  }

}
