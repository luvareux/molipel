import { Injectable } from '@angular/core';

export interface ProductosRules{
  id:number;
  imagen:string;
  titulo:string;
  codigo:number;
  medidas:string;
  cantidad:number;
  bolson:string;
  infoTec:string;
  categoria:string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos:ProductosRules[] = [
    {
      "id":0,
      "imagen":"ph-48-rollos-x-30-mts.png",
      "titulo":"Papel Higiénico 48 rollos x 30 mts",
      "codigo":821923,
      "medidas":"665mm x 265mm x 415mm",
      "cantidad":50,
      "bolson":"Si",
      "infoTec":"Papel-Higiénico-48-rollos-x-30-mts",
      "categoria":"Papel Higiénico"
    }
  ];


  getProductos(){
    return this.productos;
  }
  getProducto(id:number){
   let  prodArr = [];
   for (let producto of this.productos){
      if(producto.id == id){
        prodArr.push(producto);
      }
   }
   return prodArr;
  }

  buscarProducto(termino:string){
    let prodArr = [];
    termino = termino.toLocaleLowerCase();
    for( let producto of this.productos){
      let nombre = producto.categoria.toLocaleLowerCase();
      if(nombre.indexOf(termino) >=0){
        prodArr.push(producto);
      }
    }
    return prodArr;
  }


  constructor() { }
}
