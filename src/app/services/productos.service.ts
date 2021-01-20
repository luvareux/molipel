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
      "medidas":"30 mts",
      "cantidad":50,
      "bolson":"Si",
      "infoTec":"Papel-Higiénico-48-rollos-x-30-mts",
      "categoria":"higienicos"
    },
    {
      "id":1,
      "imagen":"ph-48-rollos-x-80-mts.png",
      "titulo":"Papel Higiénico 30 rollos x 80 mts",
      "codigo":821924,
      "medidas":"80 mts",
      "cantidad":50,
      "bolson":"",
      "infoTec":"Papel-Higiénico-30-rollos-x-80-mts",
      "categoria":"higienicos"
    },
    {
      "id":2,
      "imagen":"ph-30-rollos-x-120-mts.png",
      "titulo":"Papel Higiénico 30 rollos x 120 mts",
      "codigo":821925,
      "medidas":"120 mts",
      "cantidad":50,
      "bolson":"",
      "infoTec":"papel-higiénico-30-rollos-x-120-mts",
      "categoria":"higienicos"
    },
    {
      "id":3,
      "imagen":"ph-institucional-8-rollos-x-300-mts.jpg",
      "titulo":"Papel Higiénico institucional 8 rollos x 300 mts",
      "codigo":821926,
      "medidas":"300 mts",
      "cantidad":50,
      "bolson":"",
      "infoTec":"papel-higiénico-institucional-8-rollos-x-300-mts",
      "categoria":"higienicos"
    },
    {
      "id":4,
      "imagen":"ph-30-rollos-x-150-mts.jpg",
      "titulo":"Papel Higiénico 30 rollos x 150 mts",
      "codigo":821927,
      "medidas":"300 mts",
      "cantidad":50,
      "bolson":"",
      "infoTec":"ph-30-rollos-x-150-mts",
      "categoria":"higienicos"
    },
    {
      "id":5,
      "imagen":"ph-12-rollos-x-150-mts.jpg",
      "titulo":"papel higiénico 12 rollos x 150 mts",
      "codigo":821928,
      "medidas":"150 mts",
      "cantidad":50,
      "bolson":"",
      "infoTec":"ph-12-rollos-x-150-mts",
      "categoria":"higienicos"
    },
    {
      "id":6,
      "imagen":"ph-4-x-80-mts-10-u.jpg",
      "titulo":"Papel Higiénico 4 x 80 mts 10 u",
      "codigo":821929/1,
      "medidas":"80 mts",
      "cantidad":50,
      "bolson":"",
      "infoTec":"ph-4-x-80-mts-10-u",
      "categoria":"higienicos"
    },
    {
      "id":7,
      "imagen":"toalla-6-x-300-mts-de-20-cm.jpg",
      "titulo":"Toalla 6 x 300 mts de 20 cm.",
      "codigo":821931,
      "medidas":"300 mts de 20 cm.",
      "cantidad":50,
      "bolson":"",
      "infoTec":"toalla-6-x-300-mts-de-20-cm",
      "categoria":"toallas"
    },
    {
      "id":8,
      "imagen":"toalla-8-x-150-mts-de-20-cm.jpg",
      "titulo":"Toalla 8 x 150 mts 20 cm.",
      "codigo":821933,
      "medidas":"300 mts de 20 cm.",
      "cantidad":50,
      "bolson":"",
      "infoTec":"toalla-8-x-150-mts-de-20-cm",
      "categoria":"toallas"
    },
    {
      "id":9,
      "imagen":"toalla-2-x-400-mts-de-20-cm.jpg",
      "titulo":"Toalla 2 x 400 mts 20 cm doble hoja",
      "codigo":821934,
      "medidas":"300 mts de 20 cm.",
      "cantidad":0,
      "bolson":"",
      "infoTec":"toalla-2-x-400-mts-de-20-cm",
      "categoria":"toallas"
    },
    {
      "id":10,
      "imagen":"rollo-de-cocina-8x300-panos.jpg",
      "titulo":"Rollo de cocina 8x300 paños",
      "codigo":77,
      "medidas":"8 x 300 mts",
      "cantidad":0,
      "bolson":"",
      "infoTec":"rollo-de-cocina-8x300-panos",
      "categoria":"rollo"
    },
    {
      "id":11,
      "imagen":"rollo-de-cocina-360-panos.jpg",
      "titulo":"Rollo 360 paños",
      "codigo":0,
      "medidas":"360 mts",
      "cantidad":0,
      "bolson":"",
      "infoTec":"rollo-de-cocina-360-panos",
      "categoria":"rollo"
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
