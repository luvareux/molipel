import { Injectable } from '@angular/core';

export interface ProductosRules{
  id:number;
  imagen:string;
  titulo:string;
  descripcion:string;
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
      "titulo":"test",
      "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nunc non lorem vestibulum efficitur lobortis ut",
      "categoria":"toallas"
    },
    {
      "id":1,
      "imagen":"t-2x400-mts-20cm-doble-hoja.png",
      "titulo":"Papel higiénico 48 rollos x 30 mts",
      "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nunc non lorem vestibulum efficitur lobortis ut",
      "categoria":"papel higiénico"
    },
    {
      "id":2,
      "imagen":"t-2x400-mts-20cm-doble-hoja.png",
      "titulo":"test 2",
      "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nunc non lorem vestibulum efficitur lobortis ut",
      "categoria":"papel higiénico"
    },
    {
      "id":3,
      "imagen":"t-2x400-mts-20cm-doble-hoja.png",
      "titulo":"test 3",
      "descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a nunc non lorem vestibulum efficitur lobortis ut",
      "categoria":"papel higiénico"
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
