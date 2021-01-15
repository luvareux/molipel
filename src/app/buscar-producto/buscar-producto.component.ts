import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from "@angular/router";

//SERVICES 
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.scss']
})
export class BuscarProductoComponent implements OnInit {

  producto:any[] = [];
  constructor(private params: ActivatedRoute, private productos:ProductosService) { 
    this.params.params.subscribe(params=>{
      this.producto = this.productos.buscarProducto(params['nombre']);
    });
  }

  ngOnInit(): void {}

}
