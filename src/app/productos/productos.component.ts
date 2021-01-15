import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

//SERVICES 
import { ProductosService, ProductosRules } from '../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productos:ProductosRules[] =[];

  constructor(private _productos:ProductosService, private rutas:Router) { }

  ngOnInit(): void {
    this.productos = this._productos.getProductos();
  }

}
