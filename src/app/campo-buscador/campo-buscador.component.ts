import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-campo-buscador',
  templateUrl: './campo-buscador.component.html',
  styleUrls: ['./campo-buscador.component.scss']
})
export class CampoBuscadorComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit(): void {
  }
  buscarProducto(termino:string){
    this.rutas.navigate(['resultado',termino]);
  }

}
