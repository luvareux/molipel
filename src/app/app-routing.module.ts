import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**** RUTA LANDINGS ****/
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoComponent } from './producto/producto.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ProductosComponent },  
  { path: 'producto/:id', component: ProductoComponent },
  { path: 'resultado/:nombre', component: BuscarProductoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
